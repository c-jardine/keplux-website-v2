import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import { PostProps } from '../../../lib/studio/types';
import { urlForImage } from '../../../lib/studio/urlForImage';
import { Tag } from '../../core';
import React from 'react';

const BlogCard = (props: PostProps) => {
  const [publishedOn, setPublishedOn] = React.useState<string>(
    props.publishedOn
  );
  React.useEffect(() => {
    let date: string;
    if (props.publishedOn) {
      const [year, month, day] = props.publishedOn.split('-');
      date = formatDistanceToNow(
        new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
      );
      setPublishedOn(date);
    } else {
      date = formatDistanceToNow(new Date(props._createdAt));
    }
    setPublishedOn(date);
  }, [props.publishedOn, props._createdAt]);
  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap={8}>
      <Box maxW={{ md: 64 }} w="full">
        {props.coverPhoto && Object.keys(props.coverPhoto).length > 2 && (
          <AspectRatio ratio={1.91 / 1}>
            <Link href={`/blog/post/${props.slug.current}`}>
              <Image
                src={urlForImage(props.coverPhoto).url()}
                alt={props.coverPhoto.caption}
                w="full"
                h="full"
                objectFit="cover"
              />
            </Link>
          </AspectRatio>
        )}
      </Box>
      <Box>
        <Flex gap={4}>
          {props.tags.map((tag) => (
            <Tag {...tag} />
          ))}
        </Flex>
        <Heading as="h3" size="lg">
          <Link href={`/blog/post/${props.slug.current}`}>{props.title}</Link>
        </Heading>
        <Link
          href={`/blog/author/${props.author.slug.current}`}
          zIndex={1}
          mt={2}
          fontSize="sm"
          textTransform="uppercase"
          letterSpacing="wider"
          fontWeight="semibold"
        >
          {props.author.name}
        </Link>
        <Text fontSize="xs" textTransform="uppercase">
          {publishedOn} ago
        </Text>
        <Text mt={4} maxW="2xl" fontSize="sm">
          {props.excerpt}
        </Text>
      </Box>
    </Stack>
  );
};
export default BlogCard;
