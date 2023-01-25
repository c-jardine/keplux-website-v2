/** @type {import('next-sitemap').IConfig} */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const config = {
  exclude: ['/404'],
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404'],
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/server-sitemap.xml`,
    ],
  },
};

module.exports = config;
