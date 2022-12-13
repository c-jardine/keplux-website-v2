import {
  Box,
  Container,
  Heading,
  Image as ChakraImage,
  SlideFade,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Parallax } from 'react-scroll-parallax';
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
      <Stack id="development" position="relative" w="full" alignItems="center">
        <Box position="absolute" w="full" h="full" top={0} left={0}>
          <ChakraImage
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="A person typing on a laptop at a desk."
            objectFit="cover"
            w="full"
            h="full"
          />
          <Box
            position="absolute"
            top={0}
            bgGradient="linear-gradient(to-br, brand.600, brand.300)"
            w="full"
            h="full"
            opacity={0.95}
          />
        </Box>
        <Container w="full" maxW="4xl" position="relative">
          <SlideFade in={true}>
            <Box pt={16} pb={40}>
              <Parallax speed={-10}>
                <Heading
                  as="h1"
                  fontWeight="black"
                  color="white"
                  textAlign="center"
                >
                  Development Blog
                </Heading>
                <Stack mt={6} color="whiteAlpha.800">
                  <Text textAlign="center">
                    Learn about our development process and the tools we use.
                    You&apos;ll find tutorials for React and Next.js,
                    TypeScript, content management systems, and more.
                  </Text>
                </Stack>
              </Parallax>
            </Box>
          </SlideFade>
        </Container>
      </Stack>
      <Container as={Stack} spacing={16} maxW="6xl" my={16}>
        <Stack spacing={4}>
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
