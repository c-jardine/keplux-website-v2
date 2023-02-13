import { Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { useInView } from 'framer-motion';
import React from 'react';
import BasicCardProps from './BasicCard.types';

const BasicCard = (props: BasicCardProps) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <Stack
      ref={ref}
      position="relative"
      bg="black"
      borderWidth={1}
      borderColor="whiteAlpha.200"
      shadow="md"
      p={8}
      spacing={8}
      rounded="lg"
      transform={inView ? 'none' : 'translateY(200px)'}
      opacity={inView ? 1 : 0}
      transition="all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
    >
      <Icon
        as={props.icon}
        alignSelf="center"
        w={10}
        h={10}
        color="brand.500"
      />
      <Stack>
        <Heading
          as="h2"
          fontSize="lg"
          textTransform="uppercase"
          textAlign="center"
          color="whiteAlpha.800"
        >
          {props.title}
        </Heading>
        <Text fontSize="sm" textAlign="center" color="whiteAlpha.600">
          {props.body}
        </Text>
      </Stack>
    </Stack>
  );
};

export default BasicCard;
