import { Box, Flex, Text } from '@chakra-ui/react';
import { TagProps } from '../../../studio/types';

const Tag = (props: TagProps) => {
  return (
    <Flex gap={1.5} alignItems="center" rounded="md" w="fit-content">
      <Box w={1.5} h={1.5} rounded="full" bg={props.color.hex} />
      <Text color="whiteAlpha.600" fontSize="xs" textTransform="uppercase">
        {props.label}
      </Text>
    </Flex>
  );
};

export default Tag;
