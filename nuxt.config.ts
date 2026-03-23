import { coreWorkItems, sideProjects } from './app/composables/siteContent'

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
        },
        { name: 'theme-color', content: '#111111' }
      ],
      link: [
        { rel: 'canonical', href: 'https://blakecampbell.com' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
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
    autoLastmod: true,
    urls: [
      '/',
      '/about',
      '/work',
      '/uses',
      ...[...coreWorkItems, ...sideProjects].map(item => `/work/${item.slug}`)
    ]
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
        ...[...coreWorkItems, ...sideProjects].map(item => `/work/${item.slug}`),
        '/sitemap.xml',
        '/robots.txt'
      ]
    }
  }
})
