import { Box, Container, Heading, Stack, StackDivider } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import logo from '../../public/keplux-logo-full-dark.png';
import { BlogCard } from '../../src/components/blog';
import { allPostsQuery, client } from '../../src/lib/studio';
import { PostProps } from '../../src/lib/studio/types';

const BlogHome: NextPage = (props: { posts: PostProps[] }) => {
  const { posts } = props;
  return (
    <>
      <NextSeo
        title="Blog"
        description="Learn about our development process and how to implement some of what we do into your own projects."
        canonical="https://www.keplux.com/blog"
      />
      <Container as={Stack} spacing={16} maxW="6xl" my={16}>
        <Box position="relative" w="full" h={32}>
          <Image
            src={logo}
            alt="Keplux Development logo"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Stack>
          <Heading as="h1">Latest posts</Heading>
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
