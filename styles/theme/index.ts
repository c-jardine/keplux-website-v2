import { extendTheme } from '@chakra-ui/react';
import { Card } from './components';
import global from './styles/global';

const theme = extendTheme({
  styles: {
    global,
  },
  components: {
    Card,
  },
});

export default theme;
