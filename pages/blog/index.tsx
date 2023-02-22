import { Container, Heading, Stack, StackDivider } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { BlogCard, BlogTabs, FeaturedSeries } from '../../src/components/blog';
import { BasicHeader } from '../../src/components/core';
import { client } from '../../src/studio/client';
import { allPostsQuery } from '../../src/studio/queries';
import { PostProps } from '../../src/studio/types';

const BlogHome: NextPage = (props: { posts: PostProps[] }) => {
  const { posts } = props;
  return (
    <>
      <NextSeo
        title="Web development blog"
        description="A web development blog featuring tutorials on React and Next.js, using TypeScript, Sanity, headless e-commerce, and more."
        canonical="https://www.keplux.com/blog"
      />
      <Stack alignItems="center" spacing={24}>
        <BasicHeader
          title="Web Development Tutorials"
          subtitle="Learn how to use React and Next.js with TypeScript-based tutorials."
        />
        <FeaturedSeries />
        <BlogTabs />
        <Container as={Stack} spacing={16} maxW="6xl" my={16}>
          <Stack spacing={4}>
            <Heading as="h2" fontWeight="black" color="whiteAlpha.800">
              Latest posts
            </Heading>
            <Stack
              gap={16}
              divider={<StackDivider borderColor="whiteAlpha.400" />}
            >
              {posts.map((post: PostProps) => (
                <BlogCard key={post._id} {...post} />
              ))}
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

/**
 * Get the blog post details for the slug contained in the route being visited.
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const posts: PostProps[] = await client.fetch(allPostsQuery);

  return {
    props: { posts },
    revalidate: 10,
  };
};

export default BlogHome;
