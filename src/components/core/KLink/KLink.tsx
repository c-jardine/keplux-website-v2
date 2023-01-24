import { chakra } from '@chakra-ui/react';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

// wrap the NextLink with Chakra UI's factory function
const KLink = chakra<typeof NextLink, NextLinkProps>(NextLink, {
  // ensure that you're forwarding all of the required props for your case
  shouldForwardProp: (prop) => ['href', 'target', 'children'].includes(prop),
  baseStyle: {
    w: 'max',
  },
});

export default KLink;
