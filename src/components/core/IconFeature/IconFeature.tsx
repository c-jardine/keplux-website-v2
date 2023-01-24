import { Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from '@react-icons/all-files';

const IconFeature = (props: {
  icon: IconType;
  heading: string;
  description: string;
  headingAs: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
}) => {
  return (
    <Flex gap={3}>
      <Icon as={props.icon} mt={-0.5} color="green.500" w={6} h={6} />
      <Stack spacing={1}>
        <Heading
          as={props.headingAs}
          fontSize="lg"
          fontWeight="black"
          textTransform="uppercase"
        >
          {props.heading}
        </Heading>
        <Text fontSize="sm" color="whiteAlpha.600">
          {props.description}
        </Text>
      </Stack>
    </Flex>
  );
};

export default IconFeature;
