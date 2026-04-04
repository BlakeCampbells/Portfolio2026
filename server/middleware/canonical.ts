import { sendRedirect } from 'h3'

const CANONICAL_HOST = 'blakecampbell.com'
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`
const PREVIEW_HOST_SUFFIX = '.workers.dev'

function getForwardedValue(value?: string) {
  return value?.split(',')[0]?.trim().toLowerCase() || ''
}

function normalizeHost(value: string) {
  return value.replace(/:443$|:80$/i, '')
}

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  const pathname = url.pathname
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname

  const forwardedHost = getForwardedValue(getRequestHeader(event, 'x-forwarded-host'))
  const forwardedProto = getForwardedValue(getRequestHeader(event, 'x-forwarded-proto'))
  const host = normalizeHost(forwardedHost || url.host.toLowerCase())
  const proto = forwardedProto || url.protocol.replace(':', '').toLowerCase()
  const isPreviewHost = host.endsWith(PREVIEW_HOST_SUFFIX)

  const needsHostRedirect = !isPreviewHost && (host !== CANONICAL_HOST || proto !== 'https')
  const needsPathRedirect = normalizedPath !== pathname

  if (!needsHostRedirect && !needsPathRedirect) {
    return
  }

  const redirectUrl = new URL(CANONICAL_ORIGIN)
  redirectUrl.pathname = normalizedPath
  redirectUrl.search = url.search

  const currentUrl = new URL(url.toString())
  currentUrl.pathname = normalizedPath
  currentUrl.host = host
  currentUrl.protocol = `${proto || 'https'}:`

  if (redirectUrl.toString() === currentUrl.toString()) {
    return
  }

  return sendRedirect(event, redirectUrl.toString(), 301)
})
