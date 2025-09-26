import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://github.com/Wan-Video/Wan2.2'

const baseSiteConfig = {
  name: "Wan Animate - AI Character Animation Tool",
  description:
    "Transform static images into dynamic animations with Wan Animate, an advanced AI-powered tool developed by Alibaba's Tongyi Lab. Create realistic character animations and video replacements effortlessly.",
  url: "https://wan-animate.xyz",
  canonical: "https://wan-animate.xyz",
  ogImage: "https://wan-animate.xyz/og.png",
  metadataBase: new URL('https://wan-animate.xyz'),
  keywords: ["wan animate", "wan2.2 animate", "AI video generator", "character animation", "open source AI video generator", "wan2.2 github", "alibaba wan animate"],
  authors: [
    {
      name: "Alibaba Tongyi Lab",
      url: "https://tongyi.aliyun.com",
      twitter: 'https://twitter.com/alibaba',
    }
  ],
  creator: '@alibaba',
  openSourceURL: 'https://github.com/Wan-Video/Wan2.2',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    // icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'twitter', href: "https://twitter.com/alibaba", icon: BsTwitterX },
    { name: 'buyMeCoffee', href: "https://wan-animate.xyz", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:support@wan-animate.xyz", icon: MdEmail },
    { name: 'twitter', href: "https://twitter.com/alibaba", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/Wan-Video/Wan2.2", icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://wan-animate.xyz", icon: SiBuymeacoffee },
    { name: 'juejin', href: "https://tongyi.aliyun.com", icon: SiJuejin },
    { name: 'weChat', href: "https://tongyi.aliyun.com", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://wan-animate.xyz/', name: 'Wan Animate' },
    { url: 'https://github.com/Wan-Video/Wan2.2/', name: 'Wan2.2 GitHub' },
    { url: 'https://tongyi.aliyun.com/', name: 'Alibaba Tongyi Lab' },
    // { url: 'https://wan-animate.xyz/docs/', name: 'Documentation' },
    // { url: 'https://wan-animate.xyz/tutorial/', name: 'Tutorials' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
