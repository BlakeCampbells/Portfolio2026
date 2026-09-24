export type WorkItem = {
  slug: string
  name: string
  role: string
  years: string
  location: string
  logo?: string
  stack: string[]
  summary: string
  caseStudy?: string
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
    summary: 'Modernizing 5+ legacy applications and improving shared UI and testing practices.',
    caseStudy:
      'At Argonne, I modernize at least five end-of-life applications, including a nuclear-waste monitoring system. I help standardize reusable React UI patterns, establish Playwright end-to-end testing, and lead adoption of AI development tools through demos and developer support.',
    details: [
      'Modernize 5+ end-of-life applications, including nuclear-waste monitoring.',
      'Standardize reusable React components across internal applications.',
      'Establish Playwright end-to-end testing practices.',
      'Lead AI tool adoption through demos, Q&A, and developer support.'
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
      'Built internal tools for reviewing chat history and machine-learning predictions.',
    caseStudy:
      'At Apple, I built tools for reviewing chat history and evaluating machine-learning predictions used globally. A chat-history review app was selected as a top-10 project from 150 submissions at an internal data science conference. I also introduced Jest and ESLint and owned features from design through delivery.',
    details: [
      'Built a chat-history review app recognized at an internal data science conference.',
      'Streamlined review and evaluation of ML model predictions.',
      'Introduced Jest and ESLint to improve code quality.',
      'Partnered with business and data science teams from design through delivery.'
    ],
    kind: 'core'
  },
  {
    slug: 'propelicy',
    name: 'Propelicy',
    role: 'Senior Software Developer & Founder',
    years: 'Oct 2020–Aug 2021',
    location: 'United States · Remote',
    logo: '/logos/propelicy.svg',
    stack: ['Vue.js', 'Nuxt.js', 'Ruby on Rails', 'Rspec', 'JavaScript'],
    summary:
      'Built an insurance onboarding platform for agents and national carriers.',
    caseStudy:
      'At Propelicy, I led frontend development for an insurance platform that streamlined agent onboarding for national carriers. I moved the frontend from Vue to Nuxt, built a reusable Storybook component library, and established unit and end-to-end testing.',
    details: [
      'Built onboarding flows for agents working with national carriers.',
      'Migrated the frontend from Vue to Nuxt.',
      'Created a Storybook design system and automated test coverage.'
    ],
    kind: 'core'
  },
  {
    slug: 'benefitmany',
    name: 'BenefitMany LLC',
    role: 'Lead Frontend Engineer & Founder',
    years: 'Oct 2017–Oct 2020',
    location: 'Reno, Nevada, United States',
    logo: '/logos/benefitmany.png',
    stack: ['JavaScript', 'Ruby on Rails', 'Ruby', 'Vue.js', 'Nuxt.js'],
    summary:
      'Founded a consultancy delivering applications for small businesses and nonprofits.',
    caseStudy:
      'At BenefitMany, I led a remote team of eight delivering software for small businesses and nonprofits. We built MVPs and automated manual workflows for clients in domestic-violence support, apparel, and education, helping nonprofits focus more resources on their missions.',
    details: [
      'Founded a consultancy serving small businesses and nonprofits.',
      'Built MVPs and automated manual client workflows.',
      'Led a remote team of eight across delivery, planning, and stakeholder communication.'
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
      'Built and maintained a donor analytics web platform for churches and nonprofits using AngularJS 1.x and Ruby on Rails.',
    caseStudy:
      'MortarStone helps churches and nonprofits understand donor behavior and keep leadership teams informed with better fundraising visibility. A key challenge during my time there was moving beyond older jQuery-era frontend patterns while continuing to support active product needs. As a frontend developer, I worked in AngularJS 1.x and helped modernize the UI architecture while integrating with existing backend services. The outcome was a more maintainable analytics product and clearer donor insight workflows for nonprofit and church leadership teams.',
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
    caseStudy:
      'AwardWentTo started from a simple personal request: my wife wanted a better way to visualize Oscar winners over time, including how ratings and runtime relate to results. I built the site in Nuxt to make Academy Awards history easier to explore and more fun to interact with. Beyond charts, the product includes Oscar bingo, year-by-year rundowns of nominees and winners, and historical category timeline data. The outcome is a polished, data-driven fan experience that blends utility and entertainment for awards season.',
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
    logo: '/logos/snapremark.svg',
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
    slug: 'uses-tech',
    name: 'uses.tech',
    role: 'Primary Maintainer',
    years: '2021–Present',
    location: 'Pittsburgh, Pennsylvania, United States',
    stack: ['Remix', 'React', 'TypeScript', 'Netlify'],
    summary:
      'Community hub for /uses pages—where developers share gear, software, stacks, and personal sites. Primary maintainer since 2021.',
    caseStudy:
      'Uses.tech is an open source project built for developers to share their setups, workflows, and languages through /uses pages. As a maintainer for the past three years, I handle daily pull requests, content updates, and repo hygiene work. A key part of the job is keeping the directory trustworthy by removing lapsed links and purging stale entries. The outcome is a cleaner, more reliable community resource that stays useful for developers looking to learn from each other’s tooling and workflows.',
    details: [
      'Primary maintainer on the open source project behind uses.tech (awesome-uses): reviewing PRs, triage, and keeping the directory healthy.',
      'Supports contributors adding their own /uses pages and discovering how others work.',
      'Removes broken links and prunes stale data to keep quality high for readers.',
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
    caseStudy:
      'ManyComm was built to give victims of domestic violence a truly anonymous way to connect with volunteers and local support. The challenge was delivering fast, human communication while protecting privacy at all costs. We designed chat and text workflows where sensitive records could be wiped to reduce legal exposure and help keep victims safe. I owned frontend implementation and focused on making high-stress interactions clear, trustworthy, and easy to use. The outcome was a safer support channel that helped people reach real assistance while prioritizing confidentiality.',
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
    caseStudy:
      "The Experian Data Dictionary project started at MortarStone after we received an Experian report and needed to programmatically write that data to a database for charting and analysis. To solve that workflow, I built a Ruby gem around Experian's data dictionary API so field mappings and value definitions were easier to integrate and maintain. Once it proved useful internally, we open sourced it so other teams and developers could use the same tooling. The outcome was a stable utility with practical documentation and long-tail community usage.",
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
