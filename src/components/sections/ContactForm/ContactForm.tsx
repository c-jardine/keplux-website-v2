import {
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
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ContactInterestedInOptions } from '../ContactInterestedInOptions';
import { ContactFormProps } from './ContactForm.types';
import ContactFormInquiryOptions from './ContactFormInquiryOptions';

const InitialFormState: ContactFormProps = {
  name: '',
  email: '',
  website: '',
  inquiryType: 'general',
  interestedIn: [],
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] =
    React.useState<ContactFormProps>(InitialFormState);

  const {
    handleSubmit,
    register,
    watch,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormProps>();

  const onSubmit = async () => {
    try {
      await axios.post('/api/submitContactForm', { ...formData });
      setFormData(InitialFormState);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container position="relative" maxW="2xl" w="full">
      {/* <Text>hi {watch('inquiryType')}</Text> */}
      <Box
        p={{ base: 4, md: 8 }}
        rounded="lg"
        borderWidth={1}
        borderColor="gray.300"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <FormControl>
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
              <FormControl>
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
              <FormControl>
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
              </FormControl>
            </SimpleGrid>
            {watch('inquiryType') === 'quote' && (
              <ContactInterestedInOptions
                formData={formData}
                setFormData={setFormData}
              />
            )}
            <FormControl>
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
