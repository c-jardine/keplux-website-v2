import {
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
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSignedInUser } from '../../../hooks';
import { PostProps } from '../../../studio/types';
import { createToast } from '../../../utils';
import { BlogCommentFormProps } from './BlogCommentFormProps';

const BlogCommentForm = (props: { post: PostProps; user: User }) => {
  const [user] = useSignedInUser();

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
        userId: user?._id,
      });
      reset(); // Reset the form state
      createToast(toast, { text: 'Success!', status: 'success' })
    } catch (e) {
      createToast(toast, { text: 'Error!', status: 'error' })
    }
  };

  return (
    <chakra.form
      onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
      w="full"
    >
      <Stack mt={8} spacing={4}>
        {user && (
          <Stack spacing={0}>
            <Text color="whiteAlpha.600">
              Posting as{' '}
              <chakra.span fontWeight="semibold" color="whiteAlpha.800">
                {user?.name}
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
