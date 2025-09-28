import HomeIndex from "@/components/home/HomeIndex";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";
import { defaultLocale } from "@/lib/i18n";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.canonical,
    languages: {
      'en': `${siteConfig.url}/en`,
      'zh': `${siteConfig.url}/zh`,
      'es': `${siteConfig.url}/es`,
      'ja': `${siteConfig.url}/ja`,
      'ru': `${siteConfig.url}/ru`,
      'ar': `${siteConfig.url}/ar`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      }
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function Home() {
  return (
    <>
      <StructuredData lang={defaultLocale} type="software" />
      <HomeIndex lang={defaultLocale} />
    </>
  );
}