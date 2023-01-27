import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import { PostProps } from '../../../studio/types';
import { urlForImage } from '../../../studio/urlForImage';
import { KLink, Tag } from '../../core';

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
            <KLink href={`/blog/post/${props.slug.current}`}>
              <Image
                src={urlForImage(props.coverPhoto).url()}
                alt={props.coverPhoto.caption}
                w="full"
                h="full"
                objectFit="cover"
              />
            </KLink>
          </AspectRatio>
        )}
      </Box>
      <Box>
        <Flex gap={4}>
          {props.tags.map((tag) => (
            <Tag key={tag._key} {...tag} />
          ))}
        </Flex>
        <Heading as="h3" size="lg" color="whiteAlpha.800">
          <KLink
            href={`/blog/post/${props.slug.current}`}
            color="whiteAlpha.800"
          >
            {props.title}
          </KLink>
        </Heading>
        <KLink
          href={`/blog/author/${props.author.slug.current}`}
          zIndex={1}
          mt={2}
          fontSize="sm"
          textTransform="uppercase"
          letterSpacing="wider"
          fontWeight="semibold"
          color="whiteAlpha.800"
        >
          {props.author.name}
        </KLink>
        <Text fontSize="xs" textTransform="uppercase" color="whiteAlpha.600">
          {publishedOn} ago
        </Text>
        <Text mt={4} maxW="2xl" fontSize="sm" color="whiteAlpha.600">
          {props.excerpt}
        </Text>
      </Box>
    </Stack>
  );
};
export default BlogCard;
