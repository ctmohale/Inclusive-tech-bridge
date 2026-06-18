import type { MetadataRoute } from 'next'
import { company } from '@/lib/site-data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return ['/', '/about', '/services', '/contact'].map((path) => ({
    url: `${company.url}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))
}
