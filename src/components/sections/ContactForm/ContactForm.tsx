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
  Textarea,
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
    } catch (e) {
      // TODO: Show Toast on error.
      console.log(e);
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
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.200"
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
                >
                  Website
                </FormLabel>
                <Input
                  id="website"
                  name="website"
                  disabled={isSubmitting}
                  {...register('website')}
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
