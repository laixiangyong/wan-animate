/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://wan-animate.xyz",
  generateRobotsTxt: true,
  sitemapSize: 50000, // 增加sitemap大小限制
  additionalPaths: async (config) => {
    const languages = ['zh', 'es', 'ja', 'ru', 'ar'];
    const additionalSitemaps = [];

    languages.forEach(lang => {
      additionalSitemaps.push({
        loc: `/${lang}`,
        changefreq: 'weekly',
        priority: 1,
        lastmod: new Date().toISOString(),
      });
    });

    return additionalSitemaps;
  },
};
