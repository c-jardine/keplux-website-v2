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
        _hover: {
          borderColor: 'brand.600',
        },
        _focus: {
          borderColor: 'brand.600',
          outlineWidth: 0,
          shadow: 'none',
        },
      },
    }),
  },
});

export default Input;
