import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { signUp } from '../../src/util/cognito';

const ReferralProgramSignUpPage: NextPage = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const router = useRouter();

  const _handleSignUp = async () => {
    const res = await signUp(email, password);
  };

  return (
    <Stack py={16} spacing={16} alignItems="center">
      <Box maxW="4xl" w="full" textAlign="center" mx="auto">
        <Heading as="h1">Join the Referral Program</Heading>
        <Text>
          We&apos;re happy to have you join the program! Enter your email and a
          password to continue the sign up process.
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
      >
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          colorScheme="brand"
          w="fit-content"
          alignSelf="flex-end"
          onClick={async () => _handleSignUp(email, password)}
        >
          Register
        </Button>
      </Container>
    </Stack>
  );
};

export default ReferralProgramSignUpPage;
