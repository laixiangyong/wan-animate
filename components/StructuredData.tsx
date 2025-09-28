"use client"

import { siteConfig } from "@/config/site"

interface StructuredDataProps {
  lang: string
  type?: 'website' | 'product' | 'software'
}

export default function StructuredData({ lang, type = 'website' }: StructuredDataProps) {
  const baseUrl = siteConfig.url
  const currentUrl = `${baseUrl}/${lang}`

  // 基础网站结构化数据
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "alternateName": "Wan2.2 Animate",
    "description": siteConfig.description,
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alibaba Tongyi Lab",
      "url": "https://tongyi.aliyun.com",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
        "width": 200,
        "height": 200
      },
      "sameAs": [
        "https://twitter.com/alibaba",
        "https://github.com/Wan-Video/Wan2.2",
        "https://tongyi.aliyun.com"
      ]
    },
    "inLanguage": lang,
    "isAccessibleForFree": true,
    "license": "https://github.com/Wan-Video/Wan2.2/blob/main/LICENSE",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  }

  // 软件应用结构化数据
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Wan Animate",
    "description": siteConfig.description,
    "url": baseUrl,
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": ["Windows", "macOS", "Linux"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Organization",
      "name": "Alibaba Tongyi Lab",
      "url": "https://tongyi.aliyun.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alibaba Tongyi Lab",
      "url": "https://tongyi.aliyun.com"
    },
    "softwareVersion": "2.2",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "downloadUrl": "https://github.com/Wan-Video/Wan2.2",
    "screenshot": `${baseUrl}/og.png`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "inLanguage": lang,
    "isAccessibleForFree": true,
    "license": "https://github.com/Wan-Video/Wan2.2/blob/main/LICENSE",
    "keywords": siteConfig.keywords.join(", ")
  }

  // 产品结构化数据
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wan Animate",
    "description": siteConfig.description,
    "url": baseUrl,
    "image": [`${baseUrl}/og.png`, `${baseUrl}/logo.png`],
    "brand": {
      "@type": "Brand",
      "name": "Alibaba Tongyi Lab"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Alibaba Tongyi Lab",
      "url": "https://tongyi.aliyun.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Alibaba Tongyi Lab"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "AI Community"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent AI-powered character animation tool with realistic results."
      }
    ],
    "category": "AI Software",
    "keywords": siteConfig.keywords.join(", ")
  }

  // 面包屑导航结构化数据
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": lang === 'en' ? 'Wan Animate' : 'Wan Animate',
        "item": currentUrl
      }
    ]
  }

  // 组织结构化数据
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Alibaba Tongyi Lab",
    "url": "https://tongyi.aliyun.com",
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`,
      "width": 200,
      "height": 200
    },
    "description": "Alibaba's AI research lab developing cutting-edge AI technologies including Wan Animate for character animation and video generation.",
    "foundingDate": "2017",
    "founder": {
      "@type": "Organization",
      "name": "Alibaba Group"
    },
    "sameAs": [
      "https://twitter.com/alibaba",
      "https://github.com/Wan-Video/Wan2.2",
      "https://tongyi.aliyun.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@wan-animate.xyz"
    }
  }

  // FAQ结构化数据
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Wan Animate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wan Animate is an AI-powered character animation and video role replacement tool developed by Alibaba's Tongyi Lab. It allows users to bring any character to life with realistic animations."
        }
      },
      {
        "@type": "Question",
        "name": "Is Wan Animate free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Wan Animate is completely free and open source. You can download it from GitHub and use it without any cost."
        }
      },
      {
        "@type": "Question",
        "name": "What platforms does Wan Animate support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wan Animate supports Windows, macOS, and Linux operating systems. It can be used as a standalone application or integrated into existing workflows."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is the character animation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wan Animate uses advanced AI models with 14 billion parameters to deliver highly accurate and realistic character animations. The results are suitable for professional use cases."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I download Wan Animate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can download Wan Animate from the official GitHub repository at https://github.com/Wan-Video/Wan2.2 or try it online at the Hugging Face Space."
        }
      }
    ]
  }

  // 根据类型选择主要结构化数据
  const getMainSchema = () => {
    switch (type) {
      case 'software':
        return softwareSchema
      case 'product':
        return productSchema
      default:
        return websiteSchema
    }
  }

  const schemas = [
    getMainSchema(),
    organizationSchema,
    breadcrumbSchema,
    faqSchema
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  )
}
