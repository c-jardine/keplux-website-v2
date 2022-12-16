import { HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { ToggleButton } from '../../core';
import { ContactFormProps } from '../ContactForm';

const QuoteFieldOptions = [
  { name: 'starter-plan', label: 'Starter plan' },
  { name: 'professional-plan', label: 'Professional plan' },
  { name: 'ecommerce-plan', label: 'E-commerce plan' },
  { name: 'ultimate-plan', label: 'Ultimate plan' },
  { name: 'hosting', label: 'Hosting' },
  { name: 'cms', label: 'Content management' },
  { name: 'ecommerce', label: 'E-commerce' },
  { name: 'website-update', label: 'Website update' },
];

const ContactInterestedInOptions = (props: {
  formData: ContactFormProps;
  setFormData: React.Dispatch<React.SetStateAction<ContactFormProps>>;
}) => {
  // Check if form contains the specified option
  const _isSelected = (name: string) =>
    props.formData.interestedIn.includes(name);

  // Add or remove the specified option
  const _handleChange = (name: string) => {
    if (_isSelected(name)) {
      props.setFormData({
        ...props.formData,
        interestedIn: props.formData.interestedIn.filter(
          (item) => item !== name
        ),
      });
    } else {
      props.setFormData({
        ...props.formData,
        interestedIn: [...props.formData.interestedIn, name],
      });
    }
  };
  return (
    <Stack spacing={1}>
      <Text fontSize="xs">Interested in</Text>
      <HStack flexWrap="wrap" w="full" rowGap={2}>
        {QuoteFieldOptions.map((field) => (
          <ToggleButton
            key={field.name}
            {...field}
            formData={props.formData}
            setFormData={_handleChange}
          />
        ))}
      </HStack>
    </Stack>
  );
};
export default ContactInterestedInOptions;
