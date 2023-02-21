import { ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

const Textarea: ComponentStyleConfig = defineStyleConfig({
  variants: {
    outline: {
      fontSize: 'sm',
      borderColor: 'whiteAlpha.400',
      color: 'whiteAlpha.600',
      _hover: {
        borderColor: 'whiteAlpha.800',
        color: 'whiteAlpha.800',
      },
      _focus: {
        borderColor: 'whiteAlpha.800',
        outlineWidth: 0,
        shadow: 'none',
        color: 'whiteAlpha.800',
      },
    },
  },
});

export default Textarea;
