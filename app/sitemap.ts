import { siteConfig } from '@/config/site'
import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic'   // 🚨 强制 sitemap 每次生成，不走缓存

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const languages = ['en', 'zh', 'es', 'ja', 'ru', 'ar']

  const routes: MetadataRoute.Sitemap = []

  languages.forEach(lang => {
    routes.push({
      url: lang === 'en' ? baseUrl : `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: lang === 'en' ? 0.7 : 1.0,
    })
  })

  return routes
}
