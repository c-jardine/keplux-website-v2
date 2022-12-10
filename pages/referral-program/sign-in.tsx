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
import { signIn } from 'next-auth/react';
import React from 'react';

const ReferralProgramSignInPage: NextPage = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return (
    <Stack py={16} spacing={16} alignItems="center">
      <Box maxW="4xl" w="full" textAlign="center" mx="auto">
        <Heading as="h1">Sign in to your Referral Program account</Heading>
        <Text>Thank you for being a member of our Referral Program!</Text>
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
          type="submit"
          colorScheme="brand"
          w="fit-content"
          alignSelf="flex-end"
          onClick={async () =>
            await signIn('cognito', { username: email, password: password })
          }
          // onClick={async () => {
          //   try {
          //     await signIn('cognito', { redirect: false });
          //   } catch (e) {
          //     console.log(e);
          //   }
          // }}
        >
          Sign in
        </Button>
      </Container>
    </Stack>
  );
};

export default ReferralProgramSignInPage;
