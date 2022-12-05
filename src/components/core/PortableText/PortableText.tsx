import { Stack } from '@chakra-ui/react';
import { PortableText as RPortableText } from '@portabletext/react';
import { PortableTextComponents } from './PortableText.config';
import { PortableTextProps } from './PortableText.types';

/**
 * A custom wrapper for the PortableText component. It adds a Stack component
 * around it to easily add gaps between block content.
 * @param props - The PortableText data.
 */
const PortableText = (props: PortableTextProps) => {
  return (
    <Stack spacing={4}>
      {/* TODO: Fix this TypeScript problem. */}
      <RPortableText value={props.value} components={PortableTextComponents} />
    </Stack>
  );
};

export default PortableText;
