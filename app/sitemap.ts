import { siteConfig } from '@/config/site'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Define all supported languages
  const languages = ['en', 'zh', 'es', 'ja', 'ru', 'ar']

  // Generate sitemap entries for each language
  const routes: MetadataRoute.Sitemap = []

  // Add homepage for each language
  languages.forEach(lang => {
    routes.push({
      url: lang === 'en' ? baseUrl : `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    })
  })

  // Add other important pages (if any)
  // For now, we only have the homepage with language variants

  return routes
}
