import { Flex, Link, Text } from '@chakra-ui/react';
import { PostProps } from '../../../lib/studio/types';

/**
 * Section showing what series the post belongs to, if any.
 */
const _BlogPageSeries = (props: Pick<PostProps, 'postSeries'>) => {
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

export default _BlogPageSeries;
