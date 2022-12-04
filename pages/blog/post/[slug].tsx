import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { BlogPageLayout } from '../../../src/components/blog';
import {
  allPostSlugsQuery,
  client,
  postBySlugQuery,
} from '../../../src/lib/studio';
import { PostProps, SlugProps } from '../../../src/lib/studio/types';

const BlogPostPage: NextPage = (props: PostProps) => {
  return <BlogPageLayout {...props} />;
};

/**
 * Get all of the existing blog post slugs to statically build the routes.
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: { slug: SlugProps }[] = await client.fetch(allPostSlugsQuery);

  return {
    paths: slugs.map((item) => {
      return { params: { slug: item.slug.current } };
    }),
    fallback: false,
  };
};

/**
 * Get the blog post details for the slug contained in the route being visited.
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const post: PostProps = await client.fetch(postBySlugQuery, {
    slug: context.params.slug,
  });

  return {
    props: post,
  };
};

export default BlogPostPage;
