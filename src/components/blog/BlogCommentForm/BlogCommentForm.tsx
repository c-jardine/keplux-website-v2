import {
  Box,
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Spinner,
  Stack,
  Text,
  Textarea,
  useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { client } from '../../../studio/client';
import { getSignedInUserQuery } from '../../../studio/queries';
import { PostProps, UserProps } from '../../../studio/types';
import { BlogCommentFormProps } from './BlogCommentFormProps';

const BlogCommentForm = (props: { post: PostProps; user: User }) => {
  const [profile, setProfile] = React.useState<UserProps>(null);

  React.useEffect(() => {
    void (async () => {
      const profileData: UserProps = await client.fetch(getSignedInUserQuery, {
        email: props.user.email,
      });
      setProfile(profileData);
    })();
  });
  const defaultValues: BlogCommentFormProps = {
    message: '',
  };

  const toast = useToast();

  // Configure react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BlogCommentFormProps>({ defaultValues });

  const onSubmit: SubmitHandler<BlogCommentFormProps> = async (
    data: BlogCommentFormProps
  ) => {
    try {
      await axios.post('/api/submitComment', {
        ...data,
        postId: props.post._id,
        userId: profile._id,
      });
      reset(); // Reset the form state
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
              Success!
            </Text>
          </Box>
        ),
      });
    } catch (e) {
      toast({
        position: 'bottom',
        duration: 2000,
        render: () => (
          <Box bg="red.600" py={4} rounded="md">
            <Text
              textAlign="center"
              textTransform="uppercase"
              color="white"
              fontWeight="bold"
            >
              Something went wrong
            </Text>
          </Box>
        ),
      });
    }
  };

  return (
    <chakra.form
      onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
      w="full"
    >
      <Stack mt={8} spacing={4}>
        {profile && (
          <Stack spacing={0}>
            <Text color="whiteAlpha.600">
              Posting as{' '}
              <chakra.span fontWeight="semibold" color="whiteAlpha.800">
                {profile.name}
              </chakra.span>
            </Text>
            <Text color="whiteAlpha.600" fontSize="sm">
              Not you?{' '}
              <chakra.span
                onClick={() => void signOut()}
                color="whiteAlpha.800"
                fontWeight="semibold"
                cursor="pointer"
                _hover={{ color: 'brand.600' }}
                transition="200ms ease-in-out"
              >
                Sign out.
              </chakra.span>
            </Text>
          </Stack>
        )}
        <FormControl isInvalid={!!errors.message}>
          <FormLabel
            marginBottom={1}
            fontSize="xs"
            fontWeight="normal"
            letterSpacing="wide"
            color="whiteAlpha.600"
          >
            Message
          </FormLabel>
          <Textarea
            id="message"
            name="message"
            disabled={isSubmitting}
            {...register('message', {
              required: 'Required',
              minLength: { value: 32, message: 'Provide more details' },
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
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>
        <Button variant="primary" disabled={isSubmitting} type="submit">
          {isSubmitting ? <Spinner /> : 'Send'}
        </Button>
      </Stack>
    </chakra.form>
  );
};

export default BlogCommentForm;
