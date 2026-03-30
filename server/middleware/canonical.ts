import { sendRedirect } from 'h3'

const CANONICAL_HOST = 'blakecampbell.com'
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  const pathname = url.pathname
  const normalizedPath =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname

  const forwardedHost = getRequestHeader(event, 'x-forwarded-host')
  const forwardedProto = getRequestHeader(event, 'x-forwarded-proto')
  const host = (forwardedHost || url.host).toLowerCase()
  const proto = (forwardedProto || url.protocol.replace(':', '')).toLowerCase()

  const needsHostRedirect = host !== CANONICAL_HOST || proto !== 'https'
  const needsPathRedirect = normalizedPath !== pathname

  if (!needsHostRedirect && !needsPathRedirect) {
    return
  }

  const redirectUrl = new URL(CANONICAL_ORIGIN)
  redirectUrl.pathname = normalizedPath
  redirectUrl.search = url.search

  return sendRedirect(event, redirectUrl.toString(), 301)
})
