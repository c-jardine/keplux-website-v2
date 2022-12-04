import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { format } from 'date-fns';
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
  const [publishedOn, setPublishedOn] = React.useState<string>(null);

  React.useEffect(() => {
    let date: string;
    if (props.publishedOn) {
      const [year, month, day] = props.publishedOn.split('-');
      date = format(
        new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
        'MMMM dd, yyyy'
      );
      setPublishedOn(date);
    } else {
      date = format(new Date(props._createdAt), 'MMMM dd, yyyy');
    }
    setPublishedOn(date);
  }, [props.publishedOn, props._createdAt]);

  return (
    <Container maxW="7xl">
      <Image
        src={urlForImage(props.coverPhoto).url()}
        alt={props.coverPhoto.caption}
        w="full"
        maxH="sm"
        h="full"
        objectFit="cover"
      />
      <Flex flexDirection={{ base: 'column', xl: 'row' }} gap={8} mt={16}>
        <Box maxW={{ xl: '75%' }} w="full" bg="white" shadow="md" p={8}>
          <Heading as="h1" size="3xl" mb={4}>
            {props.title}
          </Heading>
          <Flex alignItems="center" gap={4} mt={8}>
            <Avatar
              src={urlForImage(props.author.avatar).url()}
              name={props.author.name}
              size="lg"
              bg="purple.500"
            />
            <Box>
              <Text fontSize="sm" textTransform="uppercase">
                {props.author.name}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {publishedOn}
              </Text>
            </Box>
          </Flex>
          <Divider my={8} />
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
