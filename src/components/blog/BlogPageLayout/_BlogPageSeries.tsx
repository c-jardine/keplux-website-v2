import { Flex, Text } from '@chakra-ui/react';
import { PostProps } from '../../../studio/types';
import { KLink } from '../../core';

/**
 * Section showing what series the post belongs to, if any.
 */
const _BlogPageSeries = (props: Pick<PostProps, 'postSeries'>) => {
  return (
    <Flex
      flexDirection={{ base: 'column', sm: 'row' }}
      gap={2}
      alignItems={{ md: 'center' }}
    >
      <Text
        w="fit-content"
        bg="brand.900"
        color="brand.400"
        fontSize="sm"
        borderWidth={1}
        borderColor="brand.400"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="wider"
        rounded="md"
        px={2}
        py={1}
      >
        Series
      </Text>
      <KLink
        href={`/blog/series/${props.postSeries?.slug.current}`}
        color="whiteAlpha.600"
      >
        {props.postSeries.title}
      </KLink>
    </Flex>
  );
};

export default _BlogPageSeries;
