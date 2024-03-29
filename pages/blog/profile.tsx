import {
  Button, chakra, Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Stack, useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSignedInUser } from '../../src/hooks';
import { UserProps } from '../../src/studio/types';
import { createToast } from '../../src/utils';

const Profile = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [user] = useSignedInUser();
  const toast = useToast();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      void router.push('/');
    }
  }, [router, status]);

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
    if (session) {
      reset({ name: user?.name });
    }
  }, [session, reset, user?.name]);

  /**
   * Handle the form submission.
   */
  const onSubmit: SubmitHandler<unknown> = async (data: UserProps) => {
    if (session) {
      await axios.post('/api/updateProfile', {
        ...user,
        name: data.name,
      });
    }

    createToast(toast, { text: 'Saved!', status: 'success' })
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
                    variant='outline'
                    disabled={isSubmitting}
                    {...register('name', {
                      required: 'Required',
                      minLength: { value: 2, message: 'Must be at least 2 characters' },
                      maxLength: { value: 32, message: 'Must be less than 32 characters' }
                    })}

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
