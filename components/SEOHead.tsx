"use client"

import { siteConfig } from "@/config/site"

interface SEOHeadProps {
  lang: string
  title?: string
  description?: string
  canonicalUrl?: string
}

export default function SEOHead({
  lang,
  title = siteConfig.name,
  description = siteConfig.description,
  canonicalUrl = siteConfig.canonical
}: SEOHeadProps) {
  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Language alternatives */}
      <link rel="alternate" hrefLang="en" href={`${siteConfig.url}/en`} />
      <link rel="alternate" hrefLang="zh" href={`${siteConfig.url}/zh`} />
      <link rel="alternate" hrefLang="es" href={`${siteConfig.url}/es`} />
      <link rel="alternate" hrefLang="ja" href={`${siteConfig.url}/ja`} />
      <link rel="alternate" hrefLang="ru" href={`${siteConfig.url}/ru`} />
      <link rel="alternate" hrefLang="ar" href={`${siteConfig.url}/ar`} />
      <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph additional tags */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : lang === 'zh' ? 'zh_CN' : lang} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter additional tags */}
      <meta name="twitter:domain" content="wan-animate.xyz" />
      <meta name="twitter:url" content={canonicalUrl} />

      {/* Additional meta tags for better SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Wan Animate" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://tongyi.aliyun.com" />
      <link rel="preconnect" href="https://github.com" />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//twitter.com" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//tongyi.aliyun.com" />
    </>
  )
}
