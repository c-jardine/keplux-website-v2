import { Flex, useCheckboxGroup } from '@chakra-ui/react';
import React from 'react';
import { Control, FieldErrorsImpl, useController } from 'react-hook-form';
import { ToggleButton } from '../../core';
import { ContactFormProps } from './ContactForm.types';

const QuoteOptions = [
  { name: 'starter-plan', label: 'Starter plan' },
  { name: 'professional-plan', label: 'Professional plan' },
  { name: 'ecommerce-plan', label: 'E-commerce plan' },
  { name: 'ultimate-plan', label: 'Ultimate plan' },
  { name: 'hosting', label: 'Hosting' },
  { name: 'cms', label: 'Content management' },
  { name: 'ecommerce', label: 'E-commerce' },
  { name: 'website-update', label: 'Website update' },
];

const ContactFormQuoteOptions = React.forwardRef(
  (
    {
      name,
      control,
      errors,
      ...props
    }: {
      name: 'quoteOptions';
      control: Control<ContactFormProps, unknown>;
      errors: Partial<FieldErrorsImpl<ContactFormProps>>;
    },
    ref
  ) => {
    const { field } = useController({
      name,
      control,
      rules: { required: 'Required' },
    });

    const { value, getCheckboxProps } = useCheckboxGroup({ ...field });

    return (
      <>
        <Flex flexWrap="wrap" gap={2}>
          {QuoteOptions.map((option) => (
            <ToggleButton
              key={option.name}
              {...getCheckboxProps({ value: option.label, name: option.name })}
            >
              {value}
            </ToggleButton>
          ))}
        </Flex>
      </>
    );
  }
);

ContactFormQuoteOptions.displayName = 'ContactFormQuoteOptions';

export default ContactFormQuoteOptions;
