import { useEffect } from 'react'
import { company } from '@/lib/site-data'

type PageMetadataProps = {
  title?: string
  description: string
  path?: string
}

const defaultTitle = 'Inclusive Tech Bridge (Pty) Ltd | Technology for Everyone'

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

export function PageMetadata({ title, description, path = '/' }: PageMetadataProps) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${company.brandName}` : defaultTitle
    document.title = pageTitle
    setMeta('name', 'description', description)

    const canonicalUrl = new URL(path, company.url).toString()
    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('name', 'twitter:title', pageTitle)
    setMeta('name', 'twitter:description', description)
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }

    canonical.href = canonicalUrl
  }, [description, path, title])

  return null
}
