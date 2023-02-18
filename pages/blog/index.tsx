import { Container, Heading, Stack, StackDivider } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { BlogCard } from '../../src/components/blog';
import { client } from '../../src/studio/client';
import { allPostsQuery } from '../../src/studio/queries';
import { PostProps } from '../../src/studio/types';

const BlogHome: NextPage = (props: { posts: PostProps[] }) => {
  const { posts } = props;
  return (
    <>
      <NextSeo
        title="Blog"
        description="Geared towards developers, you can learn about our development process and how to implement some of what we do into your own projects."
        canonical="https://www.keplux.com/blog"
      />
      <Stack alignItems="center" spacing={16}>
        <Container maxW="7xl" w="full">
          <Stack alignItems="center" spacing={12}>
            <Stack alignItems="center">
              <Heading
                as="h1"
                fontSize={['5xl', , '6xl', '7xl']}
                fontWeight="black"
                textAlign="center"
                color="whiteAlpha.800"
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
                color="whiteAlpha.600"
              >
                Check out our development process and learn about the tools and
                technologies we use, such as Next.js, TypeScript, Sanity, and
                Swell.
              </Heading>
            </Stack>
          </Stack>
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
