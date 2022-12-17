import { Container, Heading, Stack } from '@chakra-ui/react';

/**
 * Custom error page.
 * TODO: Implement the error page.
 * @returns
 */
const ErrorPage = () => {
  return (
    <Stack alignItems="center" spacing={16}>
      <Container maxW="7xl" w="full">
        <Stack alignItems="center" spacing={12}>
          <Stack alignItems="center">
            <Heading
              as="h1"
              fontSize={['5xl', , '6xl', '7xl']}
              fontWeight="black"
              textAlign="center"
              color="black"
            >
              404
            </Heading>
            <Heading
              as="h2"
              maxW="2xl"
              w="full"
              fontSize="xl"
              textAlign="center"
              fontWeight="medium"
              color="gray.500"
            >
              Page not found
            </Heading>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default ErrorPage;
