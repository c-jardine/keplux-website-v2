/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { GetServerSidePropsContext } from 'next';
import { client } from '../src/studio/client';
import { allPostsQuery, allSeriesSlugsQuery } from '../src/studio/queries';
import { PostProps, SeriesProps } from '../src/studio/types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const generateSitemap = (posts: PostProps[], series: SeriesProps[]) => {
  const today = new Date().toISOString();
  console.log(SITE_URL);
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${SITE_URL}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${SITE_URL}/blog</loc>
        <lastmod>${today}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${SITE_URL}/blog/series</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${SITE_URL}/contact</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${SITE_URL}/our-work</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${SITE_URL}/pricing</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      <url>
        <loc>${SITE_URL}/refund-policy</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      ${posts.map((post) => {
        return `
            <url>
              <loc>${`${SITE_URL}/blog/post/${post.slug.current}`}</loc>
              <lastmod>${post._updatedAt}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
      })}
      ${series.map((s) => {
        return `
            <url>
              <loc>${`${SITE_URL}/blog/series/${s.slug.current}`}</loc>
              <lastmod>${today}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
      })}
    </urlset>`;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const SiteMap = () => {};

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const posts: PostProps[] = await client.fetch(allPostsQuery);
  const series: SeriesProps[] = await client.fetch(allSeriesSlugsQuery);
  const sitemap = generateSitemap(posts, series);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
