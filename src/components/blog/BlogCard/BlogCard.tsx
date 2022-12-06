import {
  Box,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import { PostProps } from '../../../lib/studio/types';
import { urlForImage } from '../../../lib/studio/urlForImage';

const BlogCard = (props: PostProps) => {
  return (
    <LinkBox as="article" role="group">
      <Image
        src={urlForImage(props.coverPhoto).url()}
        alt={props.coverPhoto.caption}
        w="full"
        maxH={48}
        h="full"
        objectFit="cover"
      />
      <Box
        bg="brand.500"
        position="absolute"
        w="full"
        h={1}
        transform="scaleX(0%)"
        transformOrigin="left"
        _groupHover={{ transform: 'scaleX(100%)' }}
        transition="150ms ease-in-out"
      />
      <Box mt={4}>
        <Heading as="h3" size="lg">
          <LinkOverlay href={`/blog/post/${props.slug.current}`}>
            {props.title}
          </LinkOverlay>
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
        <Text mt={4}>{props.excerpt}</Text>
      </Box>
    </LinkBox>
  );
};
export default BlogCard;
