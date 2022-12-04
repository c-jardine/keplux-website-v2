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
import React from 'react';
import { urlForImage } from '../../../lib/studio';
import { PostProps } from '../../../lib/studio/types';
import { PortableText } from '../../core';

/**
 * Header component to display the post's cover photo.
 */
const BlogPageHeader = (props: Pick<PostProps, 'coverPhoto'>) => {
  return (
    <Image
      src={urlForImage(props.coverPhoto).url()}
      alt={props.coverPhoto.caption}
      w="full"
      maxH="sm"
      h="full"
      objectFit="cover"
    />
  );
};

/**
 * Component that displays the main blog content.
 */
const BlogPageContent = (props: Omit<PostProps, 'coverPhoto'>) => {
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
  );
};

/**
 * The main blog page wrapper.
 */
const BlogPageLayout = (props: PostProps) => {
  return (
    <Container maxW="7xl">
      <BlogPageHeader coverPhoto={props.coverPhoto} />
      <BlogPageContent {...props} />
    </Container>
  );
};

BlogPageLayout.Header = BlogPageHeader;
BlogPageLayout.Content = BlogPageContent;

export default BlogPageLayout;
