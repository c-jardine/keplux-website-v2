import { inputAnatomy } from '@chakra-ui/anatomy';
import {
  ComponentStyleConfig,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(inputAnatomy.keys);

const Input: ComponentStyleConfig = helpers.defineMultiStyleConfig({
  variants: {
    outline: helpers.definePartsStyle({
      field: {
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
    }),
  },
});

export default Input;
