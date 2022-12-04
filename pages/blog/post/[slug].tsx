import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { PortableText } from '../../../src/components/core';
import {
  allPostSlugsQuery,
  client,
  postBySlugQuery,
} from '../../../src/lib/studio';
import { PostProps, SlugProps } from '../../../src/lib/studio/types';

const BlogPostPage: NextPage = (props: PostProps) => {
  return <PortableText value={props.content} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: { slug: SlugProps }[] = await client.fetch(allPostSlugsQuery);

  return {
    paths: slugs.map((item) => {
      return { params: { slug: item.slug.current } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post: PostProps = await client.fetch(postBySlugQuery, {
    slug: context.params.slug,
  });

  return {
    props: post,
  };
};

export default BlogPostPage;
