import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
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
      mx="auto"
      rounded="md"
      maxW="8xl"
      w="full"
      maxH="lg"
      h="full"
      objectFit="cover"
    />
  );
};

/**
 * Component that displays the main blog content.
 */
const BlogPageMain = (props: Omit<PostProps, 'coverPhoto'>) => {
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
    <Box maxW="6xl" w="full">
      <Flex alignItems="center" gap={4} mt={8}>
        <Box>
          <Text
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wider"
            fontWeight="semibold"
          >
            {props.author.name}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {publishedOn}
          </Text>
        </Box>
      </Flex>
      <Heading as="h1" size="3xl" mb={4}>
        {props.title}
      </Heading>
      <BlogPagePartOfSeriesSection postSeries={props.postSeries} />
      <Divider my={8} />
      <Box maxW="4xl" w="full" mx="auto">
        <PortableText value={props.content} />
      </Box>
    </Box>
  );
};

const BlogPagePartOfSeriesSection = (props: Pick<PostProps, 'postSeries'>) => {
  return (
    <Flex gap={2} alignItems="center">
      <Text
        bg="gray.200"
        color="gray.600"
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
        rounded="md"
        px={2}
        py={1}
      >
        Series
      </Text>
      <Link>{props.postSeries.title}</Link>
    </Flex>
  );
};

/**
 * Card component containing the author's information.
 */
const BlogPageAuthorCard = (props: Pick<PostProps, 'author'>) => {
  const { author } = props;
  return (
    <Card h="fit-content">
      <CardHeader>
        <Flex flexDirection="column" alignItems="center" gap={4}>
          <Avatar src={urlForImage(author.avatar).url()} name={author.name} />
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
      <CardFooter>
        <Text>Placeholder for social links</Text>
      </CardFooter>
    </Card>
  );
};

/**
 * The main blog page wrapper.
 */
const BlogPageLayout = (props: PostProps) => {
  return (
    <Stack spacing={16} alignItems="center" my={16}>
      <BlogPageHeader coverPhoto={props.coverPhoto} />
      <Container as={Stack} spacing={16} alignItems="center" maxW="8xl">
        <BlogPageMain {...props} />
        <BlogPageAuthorCard author={props.author} />
      </Container>
    </Stack>
  );
};

export default BlogPageLayout;
