import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * ThreeHeroCanvas — StructureFlowCollection "Logic Core" inspired field study.
 * Features: interconnected particle nodes, orbital rings, flowing edge lines,
 * mouse-reactive drift, and a soft vortex field — all rendered on a dark navy background.
 */
export default function ThreeHeroCanvas() {
  const mountRef = useRef(null)

  useEffect(() => {
    const el = mountRef.current
    if (!el) return

    // ─── Scene, Camera, Renderer ───────────────────────────────────────────
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0a0f1e, 0.035)

    const W = el.clientWidth
    const H = el.clientHeight

    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 200)
    camera.position.set(0, 0, 28)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    // ─── Mouse Reactive Drift ──────────────────────────────────────────────
    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // ─── 1. Particle Field (Floating Nodes) ────────────────────────────────
    const PARTICLE_COUNT = 320
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const sizes = new Float32Array(PARTICLE_COUNT)

    const palette = [
      new THREE.Color(0x3b82f6), // blue
      new THREE.Color(0x06b6d4), // cyan
      new THREE.Color(0x6366f1), // indigo
      new THREE.Color(0x10b981), // emerald
      new THREE.Color(0xa78bfa), // violet
    ]

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 8 + Math.random() * 14

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b

      sizes[i] = 1.2 + Math.random() * 2.5
    }

    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // ─── 2. Edge Lines between nearby particles ────────────────────────────
    const edgePositions = []
    const edgeColors = []
    const MAX_DIST = 5.5

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < MAX_DIST) {
          edgePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
          edgePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2])

          const alpha = 1 - dist / MAX_DIST
          edgeColors.push(0.23 * alpha, 0.51 * alpha, 0.96 * alpha)
          edgeColors.push(0.04 * alpha, 0.71 * alpha, 0.83 * alpha)
        }
      }
    }

    const edgeGeo = new THREE.BufferGeometry()
    edgeGeo.setAttribute('position', new THREE.Float32BufferAttribute(edgePositions, 3))
    edgeGeo.setAttribute('color', new THREE.Float32BufferAttribute(edgeColors, 3))

    const edgeMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const edges = new THREE.LineSegments(edgeGeo, edgeMat)
    scene.add(edges)

    // ─── 3. Orbital Ring Systems ───────────────────────────────────────────
    const ringColors = [0x3b82f6, 0x06b6d4, 0x6366f1]
    const ringRadii = [5, 8, 11]
    const rings = []

    ringRadii.forEach((radius, idx) => {
      const points = []
      for (let i = 0; i <= 128; i++) {
        const t = (i / 128) * Math.PI * 2
        points.push(new THREE.Vector3(Math.cos(t) * radius, Math.sin(t) * radius * 0.35, Math.sin(t) * radius))
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(points)
      const ringMat = new THREE.LineBasicMaterial({
        color: ringColors[idx],
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      const ring = new THREE.Line(ringGeo, ringMat)
      ring.rotation.x = Math.PI / (4 + idx * 1.5)
      ring.rotation.y = idx * 0.8
      scene.add(ring)
      rings.push(ring)
    })

    // ─── 4. Central Core — Glowing Nucleus ────────────────────────────────
    const nucleusGeo = new THREE.SphereGeometry(0.5, 32, 32)
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.7,
    })
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat)
    scene.add(nucleus)

    // Nucleus glow halo
    const haloGeo = new THREE.SphereGeometry(1.2, 32, 32)
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    })
    scene.add(new THREE.Mesh(haloGeo, haloMat))

    // ─── 5. Sparse Embers (bright micro dots) ─────────────────────────────
    const emberCount = 80
    const emberPos = new Float32Array(emberCount * 3)
    for (let i = 0; i < emberCount; i++) {
      emberPos[i * 3] = (Math.random() - 0.5) * 40
      emberPos[i * 3 + 1] = (Math.random() - 0.5) * 40
      emberPos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    const emberGeo = new THREE.BufferGeometry()
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3))
    const emberMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    scene.add(new THREE.Points(emberGeo, emberMat))

    // ─── Resize Handler ───────────────────────────────────────────────────
    const onResize = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // ─── Animation Loop ───────────────────────────────────────────────────
    let frameId
    const clock = new THREE.Clock()

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Slow organic drift
      particles.rotation.y = t * 0.04 + mouse.x * 0.08
      particles.rotation.x = t * 0.02 + mouse.y * 0.05

      edges.rotation.y = particles.rotation.y
      edges.rotation.x = particles.rotation.x

      // Orbital rings counter-rotate
      rings.forEach((ring, i) => {
        ring.rotation.z = t * (0.06 + i * 0.02)
        ring.rotation.y = t * 0.03 * (i % 2 === 0 ? 1 : -1)
      })

      // Nucleus pulse
      const pulse = 0.85 + Math.sin(t * 2.2) * 0.15
      nucleus.scale.setScalar(pulse)

      // Camera subtle drift toward mouse
      camera.position.x += (mouse.x * 1.5 - camera.position.x) * 0.025
      camera.position.y += (mouse.y * 1.0 - camera.position.y) * 0.025
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // ─── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
