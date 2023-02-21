import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Stack,
  Text,
  chakra,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { client } from '../../src/studio/client';
import { getSignedInUserQuery } from '../../src/studio/queries';
import { UserProps } from '../../src/studio/types';

const Profile = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      void router.push('/');
    }
  }, [router, status]);

  const toast = useToast();

  const defaultValues = { name: '' };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserProps>({ defaultValues });

  /**
   * Load the user's name from Sanity and reset the form with the fetched data.
   */
  React.useEffect(() => {
    void (async () => {
      if (session) {
        const user: UserProps = await client.fetch(getSignedInUserQuery, {
          email: session?.user?.email,
        });
        reset({ name: user.name });
      }
    })();
  }, [session, reset]);

  /**
   * Handle the form submission.
   */
  const onSubmit: SubmitHandler<unknown> = async (data: UserProps) => {
    if (session) {
      await axios.post('/api/updateProfile', {
        name: data.name,
        email: session.user.email,
      });
    }

    toast({
      position: 'bottom',
      duration: 2000,
      render: () => (
        <Box bg="green.600" py={4} rounded="md">
          <Text
            textAlign="center"
            textTransform="uppercase"
            color="white"
            fontWeight="bold"
          >
            Saved!
          </Text>
        </Box>
      ),
    });
  };

  return (
    <Container>
      <Stack spacing={8}>
        <Heading as="h1" color="whiteAlpha.800">
          Edit profile
        </Heading>
        <Stack alignItems="center">
          {session ? (
            <chakra.form
              w="full"
              onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
            >
              <Stack spacing={4}>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel
                    marginBottom={1}
                    fontSize="xs"
                    fontWeight="normal"
                    letterSpacing="wide"
                    color="whiteAlpha.600"
                  >
                    Name
                  </FormLabel>
                  <Input
                    id="name"
                    name="name"
                    disabled={isSubmitting}
                    {...register('name', {
                      required: 'Required',
                      minLength: { value: 2, message: 'Too short' },
                    })}
                    borderColor="whiteAlpha.400"
                    color="whiteAlpha.600"
                    _hover={{
                      color: 'whiteAlpha.800',
                      borderColor: 'whiteAlpha.800',
                    }}
                    _active={{
                      color: 'whiteAlpha.800',
                      borderColor: 'whiteAlpha.800',
                    }}
                    _focus={{
                      color: 'whiteAlpha.800',
                      borderColor: 'whiteAlpha.800',
                    }}
                  />
                  <FormErrorMessage fontSize="xs">
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
                <Button variant="primary" disabled={isSubmitting} type="submit">
                  {isSubmitting ? <Spinner /> : 'Save'}
                </Button>
              </Stack>
            </chakra.form>
          ) : (
            <Spinner color="brand.600" />
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Profile;
