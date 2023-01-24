import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactFormProps } from './ContactForm.types';
import ContactFormInquiryOptions from './ContactFormInquiryOptions';
import ContactFormQuoteOptions from './ContactFormQuoteOptions';

const defaultValues: ContactFormProps = {
  name: '',
  email: '',
  website: '',
  inquiryType: 'general',
  quoteOptions: [],
  message: '',
};

const ContactForm = () => {
  const toast = useToast();

  // Configure react-hook-form
  const {
    register,
    watch,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormProps>({ defaultValues });

  // Form submission handler
  const onSubmit: SubmitHandler<ContactFormProps> = async (
    data: ContactFormProps
  ) => {
    try {
      await axios.post('/api/submitContactForm', data);
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
      // TODO: Show Toast on error.
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
    <Container position="relative" maxW="2xl" w="full">
      <AbsoluteCenter w="85%" h="85%" zIndex={0}>
        <Box
          h="full"
          bgGradient="linear-gradient(to-br, orange.400, brand.600)"
          filter="blur(32px) brightness(150%)"
          p={8}
        />
      </AbsoluteCenter>
      <Box
        position="relative"
        p={{ base: 4, md: 8 }}
        rounded="lg"
        bg="black"
        borderWidth={1}
        borderColor="whiteAlpha.400"
      >
        <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
          <Stack spacing={4}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={4}>
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
              <FormControl isInvalid={!!errors.website}>
                <FormLabel
                  marginBottom={1}
                  fontSize="xs"
                  fontWeight="normal"
                  letterSpacing="wide"
                  color="whiteAlpha.600"
                >
                  Website
                </FormLabel>
                <Input
                  id="website"
                  name="website"
                  disabled={isSubmitting}
                  {...register('website')}
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
                  {errors.website && errors.website.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.inquiryType}>
                <FormLabel
                  marginBottom={1}
                  fontSize="xs"
                  fontWeight="normal"
                  letterSpacing="wide"
                  color="whiteAlpha.600"
                >
                  Inquiry Type
                </FormLabel>
                <ContactFormInquiryOptions
                  name="inquiryType"
                  control={control}
                />
                <FormErrorMessage>
                  {errors.inquiryType && errors.inquiryType.message}
                </FormErrorMessage>
              </FormControl>
            </SimpleGrid>
            {watch('inquiryType') === 'quote' && (
              <FormControl isInvalid={!!errors.quoteOptions}>
                <FormLabel
                  marginBottom={1}
                  fontSize="xs"
                  fontWeight="normal"
                  letterSpacing="wide"
                  color="whiteAlpha.600"
                >
                  Choose quote details
                </FormLabel>
                <ContactFormQuoteOptions
                  name="quoteOptions"
                  control={control}
                  errors={errors}
                />
                <FormErrorMessage>
                  {errors.quoteOptions && errors.quoteOptions.message}
                </FormErrorMessage>
              </FormControl>
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
        </form>
      </Box>
    </Container>
  );
};
export default ContactForm;
