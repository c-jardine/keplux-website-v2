import {
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { BlogCard } from '../../src/components/blog';
import { allPostsQuery, client } from '../../src/lib/studio';
import { PostProps } from '../../src/lib/studio/types';

const BlogHome: NextPage = (props: { posts: PostProps[] }) => {
  const { posts } = props;
  return (
    <>
      <NextSeo
        title="Blog"
        description="Geared towards developers, you can learn about our development process and how to implement some of what we do into your own projects."
        canonical="https://www.keplux.com/blog"
      />
      <Container as={Stack} spacing={16} maxW="6xl" my={16}>
        <Stack
          maxW="4xl"
          w="full"
          alignItems="center"
          textAlign="center"
          mx="auto"
        >
          <Heading as="h1">Blog</Heading>
          <Text>
            Learn about our development process and the tools we use.
            You&apos;ll find tutorials for React and Next.js, TypeScript,
            content management systems, and more.
          </Text>
        </Stack>
        <Stack>
          <Heading as="h2">Latest posts</Heading>
          <Stack gap={16} divider={<StackDivider />}>
            {posts.map((post: PostProps) => (
              <BlogCard key={post._id} {...post} />
            ))}
          </Stack>
        </Stack>
      </Container>
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
  };
};

export default BlogHome;
