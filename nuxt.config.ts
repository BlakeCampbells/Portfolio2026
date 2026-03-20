// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/image'],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      titleTemplate: '%s · Blake Campbell',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Blake Campbell portfolio — modern web work, clean systems, and thoughtful product execution.'
        }
      ],
      link: [{ rel: 'canonical', href: 'https://blakecampbell.com' }]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://blakecampbell.com'
    }
  },

  site: {
    url: 'https://blakecampbell.com',
    name: 'Blake Campbell'
  },

  sitemap: {
    autoLastmod: true
  },

  robots: {
    sitemap: ['/sitemap.xml']
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/about',
        '/work',
        '/uses',
        '/work/argonne-national-laboratory',
        '/work/apple',
        '/work/benefitmany',
        '/work/propelicy',
        '/work/mortarstone',
        '/work/manycomm',
        '/work/snapremark-ios-application',
        '/work/experian-data-dictionary',
        '/work/awardwentto',
        '/uses/readme-for-a-productive-2021',
        '/uses/better-readme-in-5-minutes-snack-pack-1',
        '/uses/questions-make-you-a-better-developer-snack-pack-2',
        '/uses/overlooked-design-blank-states-snack-pack-3',
        '/uses/are-default-params-in-javascript-bad-snack-pack-4',
        '/uses/tracing-vs-transformation-for-developers',
        '/sitemap.xml',
        '/robots.txt'
      ]
    }
  }
})
