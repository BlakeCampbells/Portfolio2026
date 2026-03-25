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
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Blake Campbell is a senior software engineer building high-quality web products with React, Vue, Nuxt, TypeScript, and practical product thinking.'
        },
        {
          name: 'keywords',
          content:
            'Blake Campbell, senior software engineer, frontend engineer, full stack engineer, React engineer, Vue engineer, Nuxt engineer, TypeScript engineer, Pittsburgh'
        },
        { name: 'author', content: 'Blake Campbell' },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        { property: 'og:locale', content: 'en_US' },
        { name: 'theme-color', content: '#111111' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'me', href: 'https://github.com/BlakeCampbells' },
        { rel: 'me', href: 'https://www.linkedin.com/in/blake-campbell/' }
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
    disallow: [],
    allow: ['/'],
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
