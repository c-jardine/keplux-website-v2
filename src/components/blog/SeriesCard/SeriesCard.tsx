import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  ListIcon,
  ListItem,
  Stack,
  UnorderedList,
} from '@chakra-ui/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { SeriesProps } from '../../../studio/types';
import { urlForImage } from '../../../studio/urlForImage';
import { KLink, Tag } from '../../core';

const BlogCard = (props: SeriesProps) => {
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
          {props.tags?.map((tag) => (
            <Tag key={tag._key} {...tag} />
          ))}
        </Flex>
        <Heading as="h2" size="lg">
          <KLink
            href={`/blog/series/${props.slug.current}`}
            color="whiteAlpha.800"
          >
            {props.title}
          </KLink>
        </Heading>
        <Box mt={4}>
          <Heading as="h3" color="whiteAlpha.800" fontSize="sm">
            Posts in this series
          </Heading>
          <UnorderedList mt={2} spacing={2}>
            {props.posts?.map((post) => (
              <ListItem key={post._key} display="flex">
                <ListIcon
                  as={FaChevronRight}
                  color="whiteAlpha.800"
                  w={3}
                  h={3}
                  mt="6px"
                />
                <KLink href={`/blog/post/${post.slug.current}`}>
                  {post.title}
                </KLink>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Stack>
  );
};
export default BlogCard;
