export type WorkItem = {
  slug: string
  name: string
  role: string
  years: string
  location: string
  logo?: string
  stack: string[]
  summary: string
  details: string[]
  kind: 'core' | 'side'
  siteUrl?: string
  links?: { label: string; href: string }[]
}

export type UsesCategory = {
  title: string
  items: string[]
}

export const profile = {
  name: 'Blake Campbell',
  title: 'Senior Software Engineer',
  location: 'Pittsburgh, Pennsylvania, United States',
  company: 'Argonne National Laboratory',
  linkedin: 'https://www.linkedin.com/in/blake-campbell/',
  github: 'https://github.com/BlakeCampbells',
  followers: '127+',
  connections: '122+'
}

export const about = {
  headline: 'Senior Engineer who turns chaos into clear, reliable products.',
  bio: 'I found myself coding online in 2014 and quickly realized I loved it. The constant loop of iteration and feedback made learning fun, fast, and addictive. Today I focus on turning chaos into clear, practical software that teams and users actually enjoy.',
  quickFacts: [
    '10+ years building production software applications',
    'Technical depth across frontend, backend, testing, and delivery',
    'Known for turning chaos into a focused process',
    'Trusted to lead and make smart product + design decisions',
    "Built an Oscar's site, but lost at Oscar's trivia"
  ],
  approach: [
    'Fast iteration with disciplined execution',
    'Ask the right questions early and keep problem framing clear',
    'Optimize for clarity and reusable patterns over clever complexity',
    'Good code is smart, smart code is easy to read'
  ],
  outsideOfWork: [
    'Running half marathons — a real challenge without marathon-level life takeover',
    'Cooking pies, grilled steaks, chicken dishes, and pasta',
    'DIY landscaping projects, including building a 50ft retaining wall',
    'Free time is always busy, but fun'
  ],
  everydayUse: [
    'Notion for planning and docs',
    'GitHub for version control and collaboration',
    'Spotify in the background while coding',
    'Calendar + reminders to keep delivery on track'
  ],
  setup: [
    'MacBook Pro',
    'Dual LG Ultrawide monitors',
    'Logitech MX Master mouse',
    'Corsair Vengeance K65 keyboard'
  ],
  headshot: '/images/blake-headshot.jpg'
}

export const usesCategories: UsesCategory[] = [
  {
    title: 'Computer Setup',
    items: [
      'Apple M1 MacBook Air, 16GB RAM',
      'M1 Max Studio, 32 GB RAM',
      'Alienware 34" Ultrawide Curved Monitor',
      'Logitech MX Master mouse',
      'Keychron K8 Wireless Mechanical Keyboard',
      'Keychron Wooden Palm Rest',
      'Blue Snowball USB Microphone'
    ]
  },
  {
    title: 'Desk Audio',
    items: [
      'SENNHEISER HD 599 Open Back Headphone, Ivory (Primary)',
      'Audio-Technica ATH-M50X',
      'AirPods Pro',
      'Spotify for background music while coding'
    ]
  },
  {
    title: 'Software',
    items: [
      'Notion for planning and docs',
      'GitHub for version control and collaboration',
      'Pocket Casts for podcasts',
      'Calendar plus reminders to keep delivery on track',
      'A simple notes-and-tasks workflow over overbuilt personal systems'
    ]
  },
  {
    title: 'Carry Items',
    items: [
      'Laptop',
      'AirPods',
      'Chargers'
    ]
  },
  {
    title: 'Other',
    items: [
      'Brooks Ghost daily running shoes',
      'Ryobi Tools for DIY home projects',
      'Herman Miller Aeron Desk Chair',
      'Standing Desk'
    ]
  }
]

/** Fun facts for the home page “About me” tile (not resume-style). */
export const aboutMeFun: string[] = [
  'Working remote from Pittsburgh, PA—home office.',
  'Married six years; three rescue dogs.',
  'Wake-up alarm: math problems.',
  'Built awardwentto.com for the Oscars—still lost at Oscar trivia.',
  'Half marathons, cooking, DIY landscaping (including a 50ft retaining wall).',
  'Helps maintain uses.tech so developers can share how they work.'
]

export const coreWorkItems: WorkItem[] = [
  {
    slug: 'argonne-national-laboratory',
    name: 'Argonne National Laboratory',
    role: 'Senior Software Engineer',
    years: 'Aug 2024–Present',
    location: 'Lemont, Illinois, United States · Remote',
    logo: '/logos/argonne.svg',
    stack: ['React.js', 'TypeScript', 'Full-Stack Development'],
    summary: 'Senior software engineering role focused on full-stack delivery.',
    details: [
      'Build and maintain production web software.',
      'Work primarily in React.js and TypeScript.',
      'Deliver full-stack features with a focus on reliability and clarity.'
    ],
    kind: 'core'
  },
  {
    slug: 'apple',
    name: 'Apple',
    role: 'Senior Full Stack Engineer',
    years: 'Oct 2021–Sep 2024',
    location: 'Cupertino, California, United States · Remote',
    logo: '/logos/apple.svg',
    stack: ['TypeScript', 'Full-Stack Development'],
    summary:
      'Built web applications to review machine-learning data and provide model feedback for AI/ML teams.',
    details: [
      'Worked closely with AI and Machine Learning teams.',
      'Built web tooling to review ML training and evaluation data.',
      'Implemented feedback workflows used to improve model quality.'
    ],
    kind: 'core'
  },
  {
    slug: 'benefitmany',
    name: 'BenefitMany LLC',
    role: 'Senior Developer and Partner',
    years: 'Oct 2017–Oct 2021',
    location: 'Reno, Nevada, United States',
    logo: '/logos/benefitmany.png',
    stack: ['JavaScript', 'Ruby on Rails', 'Ruby', 'Vue.js', 'Nuxt.js'],
    summary:
      'Led client delivery across multiple projects including operations and assessment platforms.',
    details: [
      'Built software for property assessment and inspection workflows.',
      'Delivered manufacturing operations tooling for in-house process management.',
      'Helped nonprofits and small businesses with practical, maintainable software.',
      'Acted as partner-level engineering lead across parallel projects.'
    ],
    kind: 'core'
  },
  {
    slug: 'propelicy',
    name: 'Propelicy',
    role: 'Senior Developer and Partner',
    years: 'Oct 2020–Aug 2021',
    location: 'United States · Remote',
    logo: '/logos/propelicy.svg',
    stack: ['Vue.js', 'Nuxt.js', 'Ruby on Rails', 'Rspec', 'JavaScript'],
    summary:
      'Built a robust Nuxt application backed by a Rails API as lead frontend developer.',
    details: [
      'Led frontend implementation and responsive UX delivery.',
      'Maintained high code quality standards across Vue/Nuxt codebases.',
      'Worked day-to-day with Nuxt and Rails integration patterns.'
    ],
    kind: 'core'
  },
  {
    slug: 'mortarstone',
    name: 'MortarStone',
    role: 'Full Stack Developer',
    years: 'Sep 2014–Dec 2017',
    location: 'Reno, Nevada, United States',
    logo: '/logos/mortarstone.svg',
    stack: ['AngularJS', 'Ruby on Rails', 'Node.js'],
    summary:
      'Built and maintained a financial analytics web platform for churches and nonprofits.',
    details: [
      'Developed and supported full-stack financial analytics features.',
      'Worked across AngularJS frontend and Rails/Node backend services.',
      'Shipped stable product improvements over a multi-year span.'
    ],
    kind: 'core'
  }
]

export const sideProjects: WorkItem[] = [
  {
    slug: 'awardwentto',
    name: 'awardwentto.com',
    role: 'Creator',
    years: '2025–Present',
    location: 'Pittsburgh, Pennsylvania, United States',
    logo: '/logos/awardwentto.svg',
    siteUrl: 'https://awardwentto.com',
    stack: ['Nuxt 4', 'Vite', 'TypeScript', 'Cloudflare'],
    summary:
      'Oscar-themed data visualizations of nominees and winners over time, plus prediction sheets and bingo for the upcoming ceremony.',
    details: [
      'Built interactive views of Academy Awards history across nominees and winners.',
      'Hosts prediction sheets for the next Oscars and bingo for watch parties.',
      'Shipped with Nuxt 4 and Vite, deployed on Cloudflare.'
    ],
    kind: 'side'
  },
  {
    slug: 'snapremark-ios-application',
    name: 'SnapRemark',
    role: 'Creator',
    years: '2024–Present',
    location: 'Pittsburgh, Pennsylvania, United States',
    logo: '/logos/snapremark.svg',
    stack: ['Swift', 'iOS'],
    summary:
      'Solo iOS side project: a social game for friends and family, written in Swift—live on the App Store.',
    details: [
      'Designed and shipped end-to-end as a native iOS app.',
      'Built in Swift with a focus on a fun, lightweight experience for small groups.',
      'Published to the App Store as a real shipping product—not a prototype.',
      'Scratch-built to learn iOS delivery while making something people could actually play together.'
    ],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/snapremark/id6738997529'
      }
    ],
    kind: 'side'
  },
  {
    slug: 'uses-tech',
    name: 'uses.tech',
    role: 'Primary Maintainer',
    years: '2021–Present',
    location: 'Pittsburgh, Pennsylvania, United States',
    stack: ['Remix', 'React', 'TypeScript', 'Netlify'],
    summary:
      'Community hub for /uses pages—where developers share gear, software, stacks, and personal sites. Primary maintainer since 2021.',
    details: [
      'Primary maintainer on the open source project behind uses.tech (awesome-uses): reviewing PRs, triage, and keeping the directory healthy.',
      'Supports contributors adding their own /uses pages and discovering how others work.',
      'Active since 2021—merges, releases, and day-to-day upkeep alongside the rest of the maintainer team.'
    ],
    links: [
      {
        label: 'uses.tech',
        href: 'https://uses.tech'
      },
      {
        label: 'GitHub',
        href: 'https://github.com/wesbos/awesome-uses'
      }
    ],
    kind: 'side'
  },
  {
    slug: 'manycomm',
    name: 'ManyComm',
    role: 'Primary Frontend Developer',
    years: 'Project',
    location: 'Pittsburgh, Pennsylvania, United States',
    logo: '/logos/manycomm.svg',
    stack: ['Vue', 'WebSockets', 'Rails API'],
    summary:
      'Anonymous text and chat for people seeking help—born from a partnership with a local domestic abuse hotline.',
    details: [
      'Product goal: private, anonymous support conversations for people in crisis.',
      'Vue frontend with WebSocket-backed sessions for real-time messaging.',
      'Implemented chat transfer flows and tight integration with a Rails API.',
      'Autoresponders when no service provider was available so users always got a clear next step.'
    ],
    kind: 'side'
  },
  {
    slug: 'experian-data-dictionary',
    name: 'Experian Data Dictionary',
    role: 'Open Source Project',
    years: '2015',
    location: 'United States',
    logo: '/logos/experian.svg',
    stack: ['Ruby', 'RubyGems'],
    summary:
      "Ruby gem for Experian's data dictionary API and docs—built for open source users; 20,000+ downloads. Finished release, stable legacy.",
    details: [
      "Focused on API and documentation workflows for anyone integrating against Experian's public data dictionary.",
      'Shipped with 100% test coverage and practical examples.',
      'Marked complete years ago and left unchanged—a small, stable utility others can still rely on.',
      '20,000+ downloads on RubyGems.'
    ],
    links: [
      {
        label: 'RubyGems',
        href: 'https://rubygems.org/gems/experian-data-dictionary'
      },
      {
        label: 'Source on GitHub',
        href: 'https://github.com/BlakeCampbells/nairepxe_data_dictionary'
      }
    ],
    kind: 'side'
  }
]

export const workItems: WorkItem[] = [...coreWorkItems, ...sideProjects]

export const useSiteContent = () => ({
  profile,
  about,
  usesCategories,
  aboutMeFun,
  coreWorkItems,
  sideProjects,
  workItems
})
