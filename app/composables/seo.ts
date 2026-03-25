const SITE_URL = 'https://blakecampbell.com'
const SITE_NAME = 'Blake Campbell'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/blake-headshot.jpg`

type SeoPageInput = {
  path: string
  title: string
  description: string
  type?: 'website' | 'profile' | 'article'
}

export const seoConfig = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  ogImage: DEFAULT_OG_IMAGE
}

export const usePortfolioSeo = ({ path, title, description, type = 'website' }: SeoPageInput) => {
  const canonical = new URL(path, `${SITE_URL}/`).toString()

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    ogType: type,
    ogSiteName: SITE_NAME,
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Portrait of Blake Campbell',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: DEFAULT_OG_IMAGE,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }]
  })

  return {
    canonical,
    siteUrl: SITE_URL,
    siteName: SITE_NAME,
    ogImage: DEFAULT_OG_IMAGE
  }
}
