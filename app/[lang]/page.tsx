import HomeIndex from "@/components/home/HomeIndex";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

interface HomeProps {
  params: { lang: string };
}

export async function generateMetadata({ params: { lang } }: HomeProps): Promise<Metadata> {
  const dict = await getDictionary(lang);
  const baseUrl = siteConfig.url;
  const currentUrl = `${baseUrl}/${lang}`;

  return {
    title: dict.Hero?.title || siteConfig.name,
    description: dict.Hero?.description || siteConfig.description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: currentUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'zh': `${baseUrl}/zh`,
        'es': `${baseUrl}/es`,
        'ja': `${baseUrl}/ja`,
        'ru': `${baseUrl}/ru`,
        'ar': `${baseUrl}/ar`,
      },
    },
    openGraph: {
      type: "website",
      locale: lang === 'en' ? 'en_US' : lang === 'zh' ? 'zh_CN' : lang,
      url: currentUrl,
      title: dict.Hero?.title || siteConfig.name,
      description: dict.Hero?.description || siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: dict.Hero?.title || siteConfig.name,
        }
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.url,
      title: dict.Hero?.title || siteConfig.name,
      description: dict.Hero?.description || siteConfig.description,
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
}

export default async function Home({ params: { lang } }: HomeProps) {
  return (
    <>
      <StructuredData lang={lang} type="software" />
      <HomeIndex lang={lang} />
    </>
  );
}