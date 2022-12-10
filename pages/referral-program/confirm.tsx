import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  PinInput,
  PinInputField,
  Stack,
  Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';

const ReferralProgramConfirmPage: NextPage = () => {
  return (
    <Stack py={16} spacing={16} alignItems="center">
      <Box maxW="4xl" w="full" textAlign="center" mx="auto">
        <Heading as="h1">Confirm your email</Heading>
        <Text>
          We have sent you a confirmation code to your email at: EMAIL
        </Text>
        <Text>
          Didn&apos;t get it?{' '}
          <Link href="#" color="brand.600" fontWeight="semibold">
            Send it again.
          </Link>
        </Text>
      </Box>
      <Container
        as={Stack}
        spacing={4}
        p={{ base: 4, md: 8 }}
        maxW="2xl"
        w="full"
        bg="white"
        rounded="lg"
        shadow="md"
        alignItems="center"
      >
        <HStack>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Button
          colorScheme="brand"
          w="fit-content"
          // onClick={async () => {
          //   try {
          //     await signIn('cognito', { redirect: false });
          //   } catch (e) {
          //     console.log(e);
          //   }
          // }}
        >
          Confirm
        </Button>
      </Container>
    </Stack>
  );
};

export default ReferralProgramConfirmPage;
