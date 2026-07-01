import { useEffect } from 'react'
import { profile } from '../../content/profile'

type SeoProps = {
  title: string
  description: string
  path?: string
  image?: string
}

const upsertMeta = (selector: string, attr: 'name' | 'property', value: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, value)
    document.head.appendChild(tag)
  }

  tag.content = content
}

export function Seo({ title, description, path = '/', image = '/og-image.png' }: SeoProps) {
  useEffect(() => {
    const pageTitle = `${title} | ${profile.name}`
    const canonicalUrl = `${profile.siteUrl}${path}`
    const imageUrl = image.startsWith('http') ? image : `${profile.siteUrl}${image}`

    document.title = pageTitle
    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', pageTitle)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website')
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl)
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }, [description, image, path, title])

  return null
}
