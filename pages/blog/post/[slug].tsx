import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { PortableText } from '../../../src/components/core';
import {
  allPostSlugsQuery,
  client,
  postBySlugQuery,
} from '../../../src/lib/studio';
import { PostProps, SlugProps } from '../../../src/lib/studio/types';
import { urlForImage } from '../../../src/lib/studio/urlForImage';

const BlogPostPage: NextPage = (props: PostProps) => {
  return (
    <Container maxW="6xl">
      <Image
        src={urlForImage(props.coverPhoto).url()}
        alt={props.coverPhoto.caption}
        w="full"
        maxH="sm"
        h="full"
        objectFit="cover"
      />
      <Flex flexDirection={{ base: 'column', xl: 'row' }} gap={8}>
        <Box maxW={{ xl: '75%' }} w="full">
          <Heading as="h1" size="3xl" mb={4}>
            {props.title}
          </Heading>
          <PortableText value={props.content} />
        </Box>
        <Box maxW={{ xl: '25%' }} w="full"></Box>
      </Flex>
    </Container>
  );
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
