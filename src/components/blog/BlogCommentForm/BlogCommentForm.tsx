import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PostProps } from '../../../studio/types';
import { BlogCommentFormProps } from './BlogCommentFormProps';
import { useSession } from 'next-auth/react';

const BlogCommentForm = (props: { post: PostProps }) => {
  const { data: session } = useSession();

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
    <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
      <Stack mt={8} spacing={4}>
        <Stack spacing={4} direction={{ base: 'column', sm: 'row' }}>
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
          <FormControl isInvalid={!!errors.email}>
            <FormLabel
              marginBottom={1}
              fontSize="xs"
              fontWeight="normal"
              letterSpacing="wide"
              color="whiteAlpha.600"
            >
              Email
            </FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              disabled={isSubmitting}
              {...register('email', {
                required: 'Required',
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
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
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
    </form>
  );
};

export default BlogCommentForm;
