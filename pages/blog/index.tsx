import { Container, Heading, Stack, StackDivider } from '@chakra-ui/react';
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
      <Stack alignItems="center" spacing={16} py={28}>
        <Container maxW="7xl" w="full">
          <Stack alignItems="center" spacing={12}>
            <Stack alignItems="center">
              <Heading
                as="h1"
                fontSize={['5xl', , '6xl', '7xl']}
                fontWeight="black"
                textAlign="center"
                color="black"
              >
                Web Development Blog
              </Heading>
              <Heading
                as="h2"
                maxW="2xl"
                w="full"
                fontSize="xl"
                textAlign="center"
                fontWeight="medium"
                color="gray.500"
              >
                Check out our development process and learn about the tools and
                technologies we use, such as Next.js, TypeScript, Sanity, and
                Swell.
              </Heading>
            </Stack>
          </Stack>
          <Container as={Stack} spacing={16} maxW="6xl" my={16}>
            <Stack spacing={4}>
              <Heading as="h2" fontWeight="black">
                Latest posts
              </Heading>
              <Stack gap={16} divider={<StackDivider />}>
                {posts.map((post: PostProps) => (
                  <BlogCard key={post._id} {...post} />
                ))}
              </Stack>
            </Stack>
          </Container>
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
  };
};

export default BlogHome;
