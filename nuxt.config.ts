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
      routes: ['/', '/sitemap.xml', '/robots.txt']
    }
  }
})
