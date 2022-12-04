import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
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
    <Card gridColumn={{ base: '1', xl: '1 / span 2' }}>
      <CardHeader>
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
      </CardHeader>
      <Divider my={8} />
      <CardBody>
        <PortableText value={props.content} />
      </CardBody>
    </Card>
  );
};

const BlogPageAuthorCard = (props: Pick<PostProps, 'author'>) => {
  const { author } = props;
  return (
    <Card h="fit-content">
      <CardHeader>
        <Flex flexDirection="column" alignItems="center" gap={4}>
          <Image
            src={urlForImage(author.avatar).url()}
            alt={author.name}
            rounded="full"
            boxSize="150px"
          />
          <Text
            fontSize="lg"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            {author.name}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{author.bio}</Text>
      </CardBody>
    </Card>
  );
};

/**
 * The main blog page wrapper.
 */
const BlogPageLayout = (props: PostProps) => {
  return (
    <Container maxW="6xl">
      <BlogPageHeader coverPhoto={props.coverPhoto} />
      <SimpleGrid columns={{ base: 1, xl: 3 }} gap={8} mt={16}>
        <BlogPageContent {...props} />
        <BlogPageAuthorCard author={props.author} />
      </SimpleGrid>
    </Container>
  );
};

BlogPageLayout.Header = BlogPageHeader;
BlogPageLayout.Content = BlogPageContent;

export default BlogPageLayout;
