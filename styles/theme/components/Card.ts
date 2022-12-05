import {
  ComponentStyleConfig,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(['container', 'header', 'body']);

const Card: ComponentStyleConfig = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      background: 'white',
    },
  },
});

export default Card;
