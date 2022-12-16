import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
  useRadioGroup,
} from '@chakra-ui/react';
import React from 'react';
import { RadioCard } from '../../core';
import { ContactInterestedInOptions } from '../ContactInterestedInOptions';
import { ContactFormProps } from './ContactForm.types';

const InquiryTypes = ['quote', 'general'];

const ContactForm = () => {
  const [formData, setFormData] = React.useState<ContactFormProps>({
    name: '',
    email: '',
    website: '',
    inquiryType: 'general',
    interestedIn: [],
    message: '',
  });

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'inquiryType',
    value: formData.inquiryType,
    defaultValue: formData.inquiryType,
    onChange: (e: 'quote' | 'general') =>
      setFormData({ ...formData, inquiryType: e }),
  });

  const group = getRootProps();

  const _handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container position="relative" maxW="2xl" w="full">
      <Box
        p={{ base: 4, md: 8 }}
        rounded="lg"
        borderWidth={1}
        borderColor="gray.300"
      >
        <Stack spacing={4}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={4}>
            <FormControl>
              <FormLabel
                marginBottom={1}
                fontSize="xs"
                fontWeight="normal"
                letterSpacing="wide"
              >
                Name
              </FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={_handleChange}
              />
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
                name="email"
                value={formData.email}
                onChange={_handleChange}
              />
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
                name="website"
                value={formData.website}
                onChange={_handleChange}
              />
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
              <HStack {...group}>
                {InquiryTypes.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  );
                })}
              </HStack>
            </FormControl>
          </SimpleGrid>
          {formData.inquiryType === 'quote' && (
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
              name="message"
              value={formData.message}
              onChange={_handleChange}
            />
          </FormControl>
          <Button variant="primary">Send</Button>
        </Stack>
      </Box>
    </Container>
  );
};
export default ContactForm;
