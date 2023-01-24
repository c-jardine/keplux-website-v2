import {
  AbsoluteCenter,
  Box,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const ProcessStep = (props: {
  step: string;
  heading: string;
  description: string;
  flip?: boolean;
}) => {
  return (
    <Stack maxW="lg" w="full">
      <Flex
        alignSelf={props.flip ? 'flex-end' : 'flex-start'}
        justifyContent="center"
        alignItems="center"
        position="relative"
        w={16}
        h={16}
      >
        <AbsoluteCenter>
          <Box
            bg="orange.200"
            w={12}
            h={12}
            rounded="lg"
            transform="rotate(20deg)"
          />
        </AbsoluteCenter>
        <AbsoluteCenter>
          <Box
            bg="brand.500"
            w={12}
            h={12}
            rounded="lg"
            transform="rotate(70deg)"
          />
        </AbsoluteCenter>
        <Text
          position="relative"
          color="black"
          fontWeight="black"
          fontSize="2xl"
        >
          {props.step}
        </Text>
      </Flex>
      <Stack mt={6}>
        <Heading as="h3" fontSize="xl" textTransform="uppercase">
          {props.heading}
        </Heading>
        <Text color="whiteAlpha.600">{props.description}</Text>
      </Stack>
    </Stack>
  );
};

export default ProcessStep;
