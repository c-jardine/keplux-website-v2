import { ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

const Textarea: ComponentStyleConfig = defineStyleConfig({
  variants: {
    outline: {
      fontSize: 'sm',
      _hover: {
        borderColor: 'brand.600',
      },
      _focus: {
        borderColor: 'brand.600',
        outlineWidth: 0,
        shadow: 'none',
      },
    },
  },
});

export default Textarea;
