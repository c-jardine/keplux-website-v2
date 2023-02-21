import { Container, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

interface BasicHeaderProps {
  title: string;
  subtitle: React.ReactNode | string;
}

const BasicHeader = (props: BasicHeaderProps) => {
  return (
    <Container maxW="7xl" w="full">
      <Stack alignItems="center" spacing={12}>
        <Stack alignItems="center">
          <Heading
            as="h1"
            fontSize={['5xl', , '6xl', '7xl']}
            fontWeight="black"
            textAlign="center"
            color="whiteAlpha.800"
          >
            {props.title}
          </Heading>
          <Heading
            as="h2"
            maxW="2xl"
            w="full"
            fontSize="xl"
            textAlign="center"
            fontWeight="medium"
            color="whiteAlpha.600"
          >
            {props.subtitle}
          </Heading>
        </Stack>
      </Stack>
    </Container>
  );
};

export default BasicHeader;
