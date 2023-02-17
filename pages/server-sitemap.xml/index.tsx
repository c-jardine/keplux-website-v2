import { GetServerSidePropsContext } from 'next';
import { ISitemapField, getServerSideSitemap } from 'next-sitemap';
import { client } from '../../src/studio/client';
import { allPostsQuery } from '../../src/studio/queries';
import { PostProps } from '../../src/studio/types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const home: ISitemapField = {
  loc: SITE_URL,
  lastmod: new Date().toISOString(),
  changefreq: 'daily',
  priority: 1,
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const posts: PostProps[] = await client.fetch(allPostsQuery);
  const newSitemaps: ISitemapField[] = posts.map((post) => ({
    loc: `${SITE_URL}/blog/post/${post.slug.current}`,
    lastmod: post._updatedAt,
    changefreq: 'monthly',
    priority: 0.8,
  }));

  const fields: ISitemapField[] = [home, ...newSitemaps];

  return getServerSideSitemap(ctx, fields);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
