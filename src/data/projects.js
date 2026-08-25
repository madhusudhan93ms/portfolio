export const selectedProjects = [
  {
    num: '01',
    id: 'hbms',
    title: 'Hospital Billing & Management System',
    tags: ['MERN', 'Business Analysis', 'DevOps', 'SaaS'],
    description:
      'A multi-role hospital operations platform connecting patient registration, doctors, departments, pharmacy, billing and administration through structured workflows.',
    image: '/hbms.png',
    flow: ['Patient', 'Doctor', 'Departments', 'Treatment', 'Billing', 'Completion'],
    subtext: 'Multi-role hospital workflows with SaaS administration, billing, communication and operations management.',
    cta: 'Explore Case Study ↗',
    caseStudy: {
      overview:
        'HBMS is an enterprise healthcare SaaS platform built to unify diverse clinical departments, eliminate billing leakages, and automate multi-role patient care workflows.',
      problem:
        'Hospitals faced fragmented communication between reception, consultation, laboratories, pharmacy, and billing, resulting in manual record delays, lost treatment charges, and chaotic patient queues.',
      myRole: [
        'Conducted direct requirement gathering with clinical staff and administrators.',
        'Mapped real-world hospital procedures into digital state machines and role permissions.',
        'Developed modular React UI components for OPD, IPD, lab test queues, and invoice generation.',
        'Engineered Node.js & Express REST APIs with granular role-based authorization.',
        'Configured Docker Compose, Nginx reverse proxy routing, and automated MongoDB backups.',
      ],
      workflow: [
        { step: 'Patient Registration', desc: 'Demographics capture, automated queue token issuance, and medical history link.' },
        { step: 'Doctor Consultation', desc: 'EMR notes, diagnosis entry, prescription creation, and lab/radiology test orders.' },
        { step: 'Department Hand-offs', desc: 'Automated test requests route instantly to Lab, Radiology, and Pharmacy queues.' },
        { step: 'Unified Billing Engine', desc: 'Real-time aggregation of consultation, medication, room rent, and diagnostics charges.' },
      ],
      keyModules: [
        'Patient Registration & EMR',
        'Doctor Workbench & Prescriptions',
        'OPD / IPD / Emergency Tracking',
        'Ward & Bed Matrix',
        'Laboratory & Radiology Orders',
        'Pharmacy POS & Stock Dispense',
        'Consolidated Billing & GST',
        'Audit Logs & Role Permissions',
      ],
      businessAnalysis:
        'Analyzed inter-department dependencies to design automated state transitions—ensuring charges are automatically locked and queued for billing without manual re-entry.',
      development:
        'Implemented with React 19, Tailwind CSS, Node.js, Express, and MongoDB with indexing on active queues for sub-50ms query latency.',
      deployment:
        'Containerized with Docker, deployed on Ubuntu VPS via GitHub Actions CI/CD with SSL-terminated Nginx reverse proxy.',
      dataMaintenance:
        'Automated nightly mongodump backups with Gzip compression, encrypted rclone cloud sync, and SHA-256 integrity verification.',
      challengesSolutions: [
        {
          challenge: 'Preventing premature billing before pending lab results are submitted.',
          solution: 'Engineered an event-driven status lock that alerts cashiers of in-flight tests before final invoice generation.',
        },
        {
          challenge: 'High concurrency during morning OPD registration hours.',
          solution: 'Optimized MongoDB compound indexes and implemented optimistic UI updates in React.',
        },
      ],
    },
  },
  {
    num: '02',
    id: 'jewellery',
    title: 'Jewellery Billing & Inventory Management',
    tags: ['MERN', 'Inventory', 'Billing', 'Deployment'],
    description:
      'A full-stack jewellery operations platform for inventory, billing, GST, invoices, stock tracking, customer records and store management.',
    image: '/jewellery.png',
    cta: 'Explore Project ↗',
    details: {
      overview:
        'End-to-end retail software managing high-value precious metal inventory, live bullion market price feeds, GST-compliant invoicing, and customer gold loans.',
      highlights: [
        'Gold & Silver catalogue with 18K/22K/24K purity, gross/net weight, and stone deduction formulas.',
        'Live gold rate integration dynamically recalculating product price quotes.',
        'Automated multi-tier GST billing, invoice printing, and barcode tagging.',
        'Gold loan ledger tracking interest accruals, repayments, and pledged assets.',
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Nginx', 'Ubuntu VPS'],
    },
  },
  {
    num: '03',
    id: 'ecommerce',
    title: 'React E-Commerce',
    tags: ['React', 'API', 'Responsive UI'],
    description:
      'A responsive React storefront featuring dynamic products, external API integration, cart management and interactive UI.',
    image: '/e-commerce.png',
    cta: 'View Project ↗',
    details: {
      overview:
        'A fast, responsive e-commerce web application featuring real-time product discovery, persistent cart state, and smooth checkout interactions.',
      highlights: [
        'Filterable catalogue by category, rating, and price brackets.',
        'Persistent cart state management with localStorage synchronization.',
        'Mobile-first responsive layouts with fluid micro-interactions.',
      ],
      tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST API', 'Context API'],
    },
  },
  {
    num: '04',
    id: 'ui-templates',
    title: 'Frontend & UI Projects',
    tags: ['React', 'Tailwind', 'Responsive'],
    description:
      'A collection of responsive web interfaces, landing pages, business websites and UI experiments focused on clean interaction and cross-device usability.',
    image: '/ui & ux.png',
    cta: 'Explore Interfaces ↗',
    details: {
      overview:
        'A curated design system and component collection of production-grade UI templates, analytics dashboards, and interactive landing pages.',
      highlights: [
        'Modular dashboard layouts with dark/light mode tokens.',
        'Accessible forms, modal systems, and responsive data visualizers.',
        'Smooth CSS and Framer Motion micro-animations.',
      ],
      tech: ['React', 'Tailwind CSS', 'Figma', 'CSS3', 'Framer Motion'],
    },
  },
]

// Alias export for backward compatibility
export const projects = selectedProjects
