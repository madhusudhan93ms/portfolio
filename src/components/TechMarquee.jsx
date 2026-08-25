import { techMarqueeItems } from '../data/skills'

export default function TechMarquee() {
  const doubled = [...techMarqueeItems, ...techMarqueeItems]

  return (
    <div className="overflow-hidden bg-[#0a0f1e] border-y border-white/[0.06] py-4 select-none">
      <div className="flex marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 mx-8 text-sm font-medium text-white/40 tracking-widest uppercase whitespace-nowrap"
          >
            {item}
            <span className="ml-8 text-blue-500/30">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
