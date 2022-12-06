import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { TagProps } from './Tag.types';

const Tag = (props: TagProps) => {
  return (
    <Flex gap={2} alignItems="center" rounded="md" w="fit-content">
      <Box w={1.5} h={1.5} rounded="full" bg={props.color} />
      <Text color="gray.700" fontSize="xs" textTransform="uppercase">
        {props.label}
      </Text>
    </Flex>
  );
};

export default Tag;
