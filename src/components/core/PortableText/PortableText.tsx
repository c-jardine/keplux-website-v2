import { PortableText as RPortableText } from '@portabletext/react';
import React from 'react';
import { PortableTextProps } from './PortableText.types';
import { PortableTextComponents } from './PortableText.config';

const PortableText = (props: PortableTextProps) => {
  return (
    <RPortableText value={props.value} components={PortableTextComponents} />
  );
};

export default PortableText;
