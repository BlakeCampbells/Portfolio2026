export type WorkItem = {
  slug: string
  name: string
  role: string
  stack: string[]
  summary: string
  details: string[]
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
  title: 'Senior Full Stack Engineer',
  location: 'Pittsburgh, Pennsylvania, United States',
  company: 'Argonne National Laboratory',
  linkedin: 'https://www.linkedin.com/in/blake-campbell/',
  followers: '127+',
  connections: '122+'
}

export const about = {
  headline: 'I’m Blake Campbell. Senior Developer.',
  bio: 'Senior Full Stack Engineer with strong communication skills and leadership experience. Vue/Nuxt/TailwindCSS fan. Coffee drinker. Amateur gardener and chef. Always learning and improving.',
  quickFacts: [
    'JavaScript for 8+ years',
    'Cypress for end-to-end testing',
    'Frontend-focused full stack engineering',
    'Design-system + component-library driven workflow'
  ],
  setup: [
    'MacBook Pro',
    'Dual LG Ultrawide monitors',
    'Logitech MX Master mouse',
    'Corsair Vengeance K65 keyboard'
  ]
}

export const workItems: WorkItem[] = [
  {
    slug: 'apple',
    name: 'Apple',
    role: 'Senior Full Stack Engineer',
    stack: ['Vue', 'Node', 'Vue Test Utils', 'Jest'],
    summary:
      'Full stack development supporting internal review systems for machine-learning chatbots.',
    details: [
      'Built internal product surfaces with Vue + Node.',
      'Focused on test reliability through Vue Test Utils and Jest.',
      'Work is internal and not publicly shareable.'
    ]
  },
  {
    slug: 'propelicy',
    name: 'Propelicy',
    role: 'Frontend Developer / Founder',
    stack: ['Vue', 'Nuxt', 'Storybook', 'Cypress', 'Rails API'],
    summary:
      'Built large-scale insurance contracting flows and component systems to simplify broker/carrier workflows.',
    details: [
      'Owned and expanded a large Vue component library.',
      'Used Nuxt for frontend architecture and delivery.',
      'Implemented Storybook for a living design system.',
      'Delivered end-to-end quality with Cypress.',
      'Integrated deeply with a Rails API backend.'
    ]
  },
  {
    slug: 'benefitmany',
    name: 'BenefitMany',
    role: 'Frontend Developer / Co-Founder',
    stack: ['Vue', 'Rails'],
    summary:
      'Co-founded an agency focused on helping nonprofits and social-good orgs with practical software.',
    details: [
      'Led frontend architecture decisions across projects.',
      'Standardized reusable Vue components to speed delivery.',
      'Built products for nonprofit services, operations, and education use cases.'
    ]
  },
  {
    slug: 'manycomm',
    name: 'ManyComm',
    role: 'Primary Frontend Developer',
    stack: ['Vue', 'WebSockets', 'Rails API'],
    summary:
      'Anonymous support-chat product created with domestic abuse hotline needs in mind.',
    details: [
      'Implemented websocket session handling for real-time communication.',
      'Built chat-transfer flows and Rails API integrations.',
      'Supported autoresponder behavior when providers were unavailable.'
    ]
  }
]

export const sideProjects = [
  {
    name: 'SnapRemark iOS Application',
    date: 'Nov 2024',
    summary:
      'Built with Swift as a winter side project: a game for friends and family, published on the App Store.'
  },
  {
    name: 'Experian Data Dictionary',
    date: 'Feb 2015',
    summary:
      'Public data dictionary project mapping columns and values to definitions; 5,000+ downloads.'
  }
]

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
  workItems,
  sideProjects,
  thoughts
})
