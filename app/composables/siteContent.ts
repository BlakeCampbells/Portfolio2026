export type WorkItem = {
  slug: string
  name: string
  role: string
  years: string
  location: string
  logo: string
  stack: string[]
  summary: string
  details: string[]
  kind: 'core' | 'side'
  siteUrl?: string
  links?: { label: string; href: string }[]
}

export type ThoughtItem = {
  slug: string
  title: string
  date: string
  summary: string
  sections: string[]
  bullets?: string[]
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
    name: 'SnapRemark iOS Application',
    role: 'Creator',
    years: 'Winter 2024',
    location: 'Pittsburgh, Pennsylvania, United States',
    logo: '/logos/snapremark.svg',
    stack: ['Swift', 'iOS'],
    summary:
      'Solo winter build: a social game for friends and family, written in Swift and released on the App Store.',
    details: [
      'Designed and shipped end-to-end as a native iOS app.',
      'Built in Swift with a focus on a fun, lightweight experience for small groups.',
      'Published to the App Store as a real shipping product—not a prototype.',
      'Scratch-built to learn iOS delivery while making something people could actually play together.'
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

export const thoughts: ThoughtItem[] = [
  {
    slug: 'readme-for-a-productive-2021',
    title: 'Readme for a Productive 2021',
    date: '2020-12-28',
    summary: 'Theme-based planning, clean workspace habits, breaks, and deliberate learning loops.',
    sections: [
      'Pick a yearly theme instead of a fragile pass/fail goal. It gives direction without boxing you in.',
      'Start with environment cleanup: workspace, downloads, and anything adding friction.',
      'Protect your off time. Burnout is bad strategy, not a badge of honor.',
      'Keep a personal project. It helps you practice, stay curious, and keep learning momentum.'
    ]
  },
  {
    slug: 'better-readme-in-5-minutes-snack-pack-1',
    title: 'Better readme in 5 minutes (Snack Pack #1)',
    date: '2021-02-28',
    summary: 'Documentation is an easy win: project context, setup, architecture, and testing basics.',
    sections: [
      'Readmes are often neglected, but they are one of the fastest quality upgrades you can make.',
      'A useful README should explain who the project is for, how to set it up, and what stack it uses.',
      'Include architecture notes, testing/formatting expectations, and practical FAQs for future contributors.'
    ]
  },
  {
    slug: 'questions-make-you-a-better-developer-snack-pack-2',
    title: 'Questions make you a better developer (Snack Pack #2)',
    date: '2021-03-07',
    summary: 'Better developer outcomes come from specific, well-phrased, curiosity-driven questions.',
    sections: [
      'Great questions have specificity, clear phrasing, and genuine curiosity.',
      'Vague questions create vague answers. Break big problems into actionable parts.',
      'Phrasing matters: ask to improve, not to blame.',
      'Curiosity-driven questions compound learning over time.'
    ]
  },
  {
    slug: 'overlooked-design-blank-states-snack-pack-3',
    title: 'Overlooked design, blank states (Snack Pack #3)',
    date: '2021-03-27',
    summary: 'Blank states are UX critical—perceived bugs are still bugs if users lack feedback.',
    sections: [
      'Most users are not technical. Without feedback, they assume the app is broken.',
      'Design should make system state obvious: empty results vs errors vs loading are different experiences.',
      'Blank states are product quality, not cosmetic details.'
    ]
  },
  {
    slug: 'are-default-params-in-javascript-bad-snack-pack-4',
    title: 'Are Default Params in JavaScript bad? (Snack Pack #4)',
    date: '2021-04-10',
    summary: 'Default params are fine as fallback, but explicit params reduce confusion and debt.',
    sections: [
      'Defaults help as fallback behavior, but relying on them too heavily can hide intent.',
      'A boolean options parameter often becomes ambiguous over time.',
      'Prefer explicit calls and descriptive parameters to reduce technical debt and improve readability.'
    ]
  },
  {
    slug: 'tracing-vs-transformation-for-developers',
    title: 'Tracing vs Transformation for developers',
    date: '2022-02-01',
    summary: 'Tracing helps learning; transformation creates durable product value.',
    sections: [
      'Tracing (clones/tutorial follow-alongs) is useful for learning foundations.',
      'Transformation means meaningful product improvement, not cosmetic changes.',
      'Long-term products come from transformation or original creation, not copy-first momentum.'
    ]
  }
]

export const useSiteContent = () => ({
  profile,
  about,
  coreWorkItems,
  sideProjects,
  workItems,
  thoughts
})
