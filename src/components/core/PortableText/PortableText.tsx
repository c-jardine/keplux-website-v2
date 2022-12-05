import { Stack } from '@chakra-ui/react';
import { PortableText as RPortableText } from '@portabletext/react';
import { PortableTextComponents } from './PortableText.config';
import { PortableTextProps } from './PortableText.types';

const PortableText = (props: PortableTextProps) => {
  return (
    <Stack spacing={4}>
      <RPortableText value={props.value} components={PortableTextComponents} />
    </Stack>
  );
};

export default PortableText;
