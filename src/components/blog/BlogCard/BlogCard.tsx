import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import { PostProps } from '../../../lib/studio/types';
import { urlForImage } from '../../../lib/studio/urlForImage';

const BlogCard = (props: PostProps) => {
  return (
    <LinkBox as="article" role="group">
      {Object.keys(props.coverPhoto).length > 2 && (
        <Image
          src={urlForImage(props.coverPhoto).url()}
          alt={props.coverPhoto.caption}
          w="full"
          maxH={48}
          h="full"
          objectFit="cover"
        />
      )}
      <Stack spacing={8}>
        <Flex justifyContent="center" w="full">
          <Box
            mx="auto"
            bg="brand.500"
            w="full"
            h={1}
            transform="scaleX(100%)"
            _groupHover={{ transform: 'scaleX(75%)' }}
            transition="150ms ease-in-out"
          />
        </Flex>
        <Box>
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
        <Flex justifyContent="center" w="full">
          <Box
            mx="auto"
            bg="brand.500"
            w="full"
            h={1}
            transform="scaleX(100%)"
            _groupHover={{ transform: 'scaleX(75%)' }}
            transition="150ms ease-in-out"
          />
        </Flex>
      </Stack>
    </LinkBox>
  );
};
export default BlogCard;
