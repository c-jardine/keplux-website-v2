import {
  Box,
  Flex,
  Heading,
  ListIcon,
  ListItem,
  Stack,
  UnorderedList,
} from '@chakra-ui/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { SeriesProps } from '../../../lib/studio/types';
import { KLink, Tag } from '../../core';

const BlogCard = (props: SeriesProps) => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap={8}>
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
        <Box mt={4} ml={4}>
          <Heading as="h3" color="whiteAlpha.800" fontSize="sm">
            Posts in this series
          </Heading>
          <UnorderedList mt={2} spacing={2}>
            {props.posts?.map((post) => (
              <ListItem key={post._key} display="flex" alignItems="center">
                <ListIcon
                  as={FaChevronRight}
                  color="whiteAlpha.800"
                  w={3}
                  h={3}
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
