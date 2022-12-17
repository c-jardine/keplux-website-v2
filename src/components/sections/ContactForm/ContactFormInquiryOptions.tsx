import { HStack, useRadioGroup } from '@chakra-ui/react';
import React from 'react';
import { Control, useController } from 'react-hook-form';
import { RadioCard } from '../../core';
import { ContactFormProps } from './ContactForm.types';

const InquiryTypes = ['quote', 'general'];

const ContactFormInquiryOptions = React.forwardRef(
  (
    {
      name,
      control,
      ...props
    }: {
      name: 'inquiryType';
      control: Control<ContactFormProps, unknown>;
    },
    ref
  ) => {
    const { field } = useController({
      name,
      control,
      rules: { required: 'Required' },
    });

    const { getRootProps, getRadioProps } = useRadioGroup({
      ...field,
    });

    return (
      <HStack {...getRootProps()}>
        {InquiryTypes.map((value) => (
          <RadioCard key={value} {...getRadioProps({ value })}>
            {value}
          </RadioCard>
        ))}
      </HStack>
    );
  }
);

ContactFormInquiryOptions.displayName = 'ContactFormInquiryOptions';

export default ContactFormInquiryOptions;
