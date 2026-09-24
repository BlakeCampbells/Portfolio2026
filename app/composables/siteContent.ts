export type WorkItem = {
  slug: string
  name: string
  role: string
  seoTitle?: string
  years: string
  location: string
  logo?: string
  stack: string[]
  summary: string
  caseStudy?: string
  decisionAndResult?: { decision: string; result: string }
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

// The Uses layout renders these five categories in fixed positions.
export const usesCategories: [UsesCategory, UsesCategory, UsesCategory, UsesCategory, UsesCategory] = [
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
    role: 'Senior Full Stack Engineer',
    years: 'Aug 2024–Present',
    location: 'Lemont, Illinois, United States · Remote',
    logo: '/logos/argonne.svg',
    stack: ['React.js', 'TypeScript', 'Ruby on Rails', 'Playwright'],
    summary: 'Updating legacy applications and raising test coverage to at least 80% before deployment.',
    caseStudy:
      'At Argonne, I work on 5+ legacy applications, including a nuclear-waste monitoring system. We added test pipelines that check each application against an 80% coverage requirement before deployment, and I brought Playwright into end-to-end testing. I also helped build React components shared across internal apps and run demos on Copilot, Claude, and OpenAI for other developers.',
    decisionAndResult: {
      decision: 'Check coverage separately for each application before it ships.',
      result: 'Legacy apps that started with little test coverage now meet the 80% threshold for deployment.'
    },
    details: [
      'Update 5+ legacy apps, including a nuclear-waste monitoring system.',
      'Build React components that can be reused across internal applications.',
      'Add test pipelines that require 80% coverage per application before deployment.',
      'Use Playwright for end-to-end tests of legacy workflows.',
      'Run demos and Q&A sessions on Copilot, Claude, and OpenAI for developers.'
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
    stack: ['Vue.js', 'Node.js', 'TypeScript', 'Jest'],
    summary:
      'Built tools to explore and classify millions of chatbot conversations from 26 locales and 7 languages.',
    caseStudy:
      'Apple’s chatbot teams had collected millions of conversations from 26 locales in 7 languages. I built tools that let them explore that data and classify utterances through both automation and human review. One chat-history app was selected among the top 10 of 150 submissions at an internal data science conference. I also built a tool for reviewing model predictions and added Jest and ESLint to the development workflow.',
    decisionAndResult: {
      decision: 'Give teams a way to inspect conversations and review both automated and human classifications.',
      result: 'Teams worldwide could review and classify conversations from 26 locales in 7 languages.'
    },
    details: [
      'Built a chat-history app selected in the top 10 of 150 internal submissions.',
      'Helped teams explore conversations from 26 locales and 7 languages.',
      'Built automated classification and human review workflows.',
      'Built a separate tool for reviewing model predictions.',
      'Added Jest and ESLint while following Apple’s design, security, and engineering standards.',
      'Worked with business and data science teams from design through delivery.'
    ],
    kind: 'core'
  },
  {
    slug: 'propelicy',
    name: 'Propelicy',
    seoTitle: 'Propelicy Insurance Certification Software | Blake Campbell',
    role: 'Senior Software Developer & Founder',
    years: 'Oct 2020–Aug 2021',
    location: 'United States · Remote',
    logo: '/logos/propelicy.svg',
    stack: ['Vue.js', 'Nuxt.js', 'Ruby on Rails', 'Rspec', 'JavaScript'],
    summary:
      'Made it easier for insurance agents to manage carrier certifications and stay current.',
    caseStudy:
      'Insurance agents had to deal with a separate certification process for each carrier. At Propelicy, I built the frontend for an app that brought those steps and reminders into one place. The product covered carriers including Kaiser Permanente, Aetna, and UnitedHealthcare. I moved the frontend from Vue to Nuxt, built shared components in Storybook, and added unit and end-to-end tests.',
    decisionAndResult: {
      decision: 'Put carrier certification steps, status, and reminders in one place.',
      result: 'Agents could keep track of what they needed to do for each carrier and keep their certifications active.'
    },
    details: [
      'Built certification and reminder workflows for insurance agents.',
      'Moved the frontend from Vue to Nuxt.',
      'Created shared components in Storybook.',
      'Added unit and end-to-end tests.'
    ],
    kind: 'core'
  },
  {
    slug: 'benefitmany',
    name: 'BenefitMany',
    role: 'Lead Frontend Engineer & Founder',
    years: 'Oct 2017–Oct 2020',
    location: 'Reno, Nevada, United States',
    logo: '/logos/benefitmany.png',
    stack: ['JavaScript', 'Ruby on Rails', 'Ruby', 'Vue.js', 'Nuxt.js'],
    summary:
      'Built internal tools and customer-facing apps for small businesses and nonprofits.',
    caseStudy:
      'I co-founded BenefitMany to build software for small businesses and nonprofits. One apparel client needed to keep up with growing work orders across multiple shifts, so we built a work-order system for them. We also built MVPs and replaced manual processes for clients in domestic-violence support and education. I led a remote team of eight and worked directly with clients on planning and delivery.',
    decisionAndResult: {
      decision: 'Build around the work each client needed to manage every day.',
      result: 'The apparel client could handle more work orders across multiple shifts.'
    },
    details: [
      'Co-founded a consultancy serving small businesses and nonprofits.',
      'Built work-order software for an apparel business operating across multiple shifts.',
      'Built MVPs and replaced manual steps for nonprofit clients.',
      'Led an eight-person remote team through planning, development, and delivery.',
      'Worked directly with clients on requirements and priorities.'
    ],
    kind: 'core'
  },
  {
    slug: 'mortarstone',
    name: 'MortarStone',
    seoTitle: 'MortarStone Donor Analytics Software | Blake Campbell',
    role: 'Full Stack Developer',
    years: 'Sep 2014–Dec 2017',
    location: 'Reno, Nevada, United States',
    logo: '/logos/mortarstone.svg',
    stack: ['AngularJS', 'Ruby on Rails', 'Node.js'],
    summary:
      'Worked on donor analytics software for churches and nonprofits.',
    caseStudy:
      'At MortarStone, I worked on a donor analytics product for churches and nonprofits. The frontend still relied on older jQuery patterns, so I helped move parts of it to AngularJS while keeping the existing reports running. I also worked with the Rails and Node services behind those reports.',
    decisionAndResult: {
      decision: 'Move new frontend work to AngularJS while supporting the existing product.',
      result: 'The reporting UI became easier to maintain without interrupting the donor analytics work.'
    },
    details: [
      'Built and maintained donor reporting features.',
      'Worked in AngularJS, Rails, and Node.',
      'Helped replace older jQuery patterns in the frontend.'
    ],
    kind: 'core'
  }
]

export const sideProjects: WorkItem[] = [
  {
    slug: 'uses-tech',
    name: 'uses.tech',
    role: 'Core Maintainer',
    years: '2021–Present',
    location: 'Pittsburgh, Pennsylvania, United States',
    logo: '/logos/uses-tech.svg',
    stack: ['Remix', 'React', 'TypeScript', 'Netlify'],
    summary:
      'Core maintainer of uses.tech, an open-source directory with 1,000+ individual contributors.',
    caseStudy:
      'Uses.tech collects developers’ /uses pages so people can see the tools and setups behind their work. I have been a core maintainer since 2021, reviewing pull requests, handling issues, and removing broken or outdated links. More than 1,000 people have contributed to the project.',
    details: [
      'Core maintainer of uses.tech (awesome-uses), an open-source project with 1,000+ contributors.',
      'Reviews pull requests and issues as developers add and update their /uses pages.',
      'Removes broken links and outdated entries to keep the directory useful.',
      'Has handled day-to-day upkeep with the maintainer team since 2021.'
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
    slug: 'awardwentto',
    name: 'Award Went To',
    role: 'Creator',
    years: '2025–Present',
    location: 'Pittsburgh, Pennsylvania, United States',
    logo: '/logos/awardwentto.svg',
    siteUrl: 'https://awardwentto.com',
    stack: ['Nuxt 4', 'Vite', 'TypeScript', 'Cloudflare'],
    summary:
      'Oscar-themed data visualizations of nominees and winners over time, plus prediction sheets and bingo for the upcoming ceremony.',
    caseStudy:
      'Award Went To started from a simple personal request: my wife wanted a better way to visualize Oscar winners over time, including how ratings and runtime relate to results. I built the site in Nuxt to make Academy Awards history easier to explore and more fun to interact with. Beyond charts, the product includes Oscar bingo, year-by-year rundowns of nominees and winners, and historical category timeline data. The outcome is a polished, data-driven fan experience that blends utility and entertainment for awards season.',
    details: [
      'Built interactive views of Academy Awards history across nominees and winners.',
      'Tracks patterns like winner context by runtime and ratings trends.',
      'Includes Oscar bingo, yearly rundowns, and historical category-introduction data.',
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
    logo: '/logos/snapremark.png',
    stack: ['Swift', 'iOS'],
    summary:
      'Solo iOS side project: a social game for friends and family, written in Swift—live on the App Store.',
    caseStudy:
      'SnapRemark started as a personal project inspired by party word-guessing games like Catchphrase. I wanted to build something I would actually use with friends and family while learning deeper native iOS development in Swift. The product focused on quick, social gameplay and smooth in-person interactions. I built and shipped the app end-to-end and collaborated with a close friend on the logo and visual identity. The outcome was a real App Store release that turned a fun idea into a polished, playable product.',
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
    slug: 'ai-plays-pokemon',
    name: 'AI Plays Pokémon',
    role: 'Creator',
    years: 'Jul 2026–Present',
    location: 'Pittsburgh, Pennsylvania, United States',
    logo: '/logos/ai-plays-pokemon.png',
    siteUrl: 'https://aiplaypokemon.com',
    stack: ['Python', 'PyBoy', 'Recurrent PPO', 'Reinforcement Learning'],
    summary:
      'Training reinforcement learning agents for Pokémon Red and Crystal, with progress measured through verified gameplay milestones.',
    caseStudy:
      'AI Plays Pokémon trains separate recurrent PPO agents for Pokémon Red and Crystal. Each agent uses emulator screenshots and structured game state to choose actions, with feedback from verified story milestones, navigation, battles, catches, and team survival under Nuzlocke rules. I train across multiple emulator workers and all three starters, preserving model and optimizer checkpoints between runs. Frozen evaluations across every starter on fixed development seeds track verified progress, blackouts, and stalls; promising checkpoints face held-out tests against a fixed reference, with controller assistance reported separately.',
    details: [
      'Train separate recurrent PPO agents for Red and Crystal using screenshots and structured game state.',
      'Run multiple PyBoy workers across all three starters and preserve model and optimizer checkpoints.',
      'Reward verified story progress, navigation, battles, catches, and Nuzlocke team survival.',
      'Evaluate frozen checkpoints on fixed and held-out seeds, tracking gameplay results separately from training volume and controller assistance.'
    ],
    kind: 'side'
  },
  {
    slug: 'manycomm',
    name: 'ManyComm',
    role: 'Primary Frontend Developer',
    years: '2019–2021',
    location: 'Pittsburgh, Pennsylvania, United States',
    stack: ['Vue', 'WebSockets', 'Rails API'],
    summary:
      'Anonymous text and chat for people seeking help—born from a partnership with a local domestic abuse hotline.',
    caseStudy:
      'ManyComm was built to give victims of domestic violence a truly anonymous way to connect with volunteers and local support. The challenge was delivering fast, human communication while protecting privacy at all costs. We designed chat and text workflows where sensitive records could be wiped to reduce legal exposure and help keep victims safe. I owned frontend implementation and focused on making high-stress interactions clear, trustworthy, and easy to use. The outcome was a safer support channel that helped people reach real assistance while prioritizing confidentiality. The project is now archived.',
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
    seoTitle: 'Experian Data Dictionary Ruby Gem | Blake Campbell',
    role: 'Open Source Project',
    years: '2015',
    location: 'United States',
    stack: ['Ruby', 'RubyGems'],
    summary:
      "A Ruby gem for Experian's data dictionary API with 20,000+ downloads on RubyGems.",
    caseStudy:
      "The Experian Data Dictionary project started at MortarStone after we received an Experian report and needed to programmatically write that data to a database for charting and analysis. To solve that workflow, I built a Ruby gem around Experian's data dictionary API so field mappings and value definitions were easier to integrate and maintain. Once it proved useful internally, we open sourced it so other teams and developers could use the same tooling. The outcome was a stable utility with practical documentation and long-tail community usage.",
    details: [
      "Focused on API and documentation workflows for anyone integrating against Experian's public data dictionary.",
      'Shipped with 100% test coverage and practical examples.',
      'Completed years ago and no longer actively maintained.',
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
