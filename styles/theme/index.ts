import { extendTheme } from '@chakra-ui/react';
import { Card } from './components';
import colors from './styles/colors';
import global from './styles/global';

const theme = extendTheme({
  styles: {
    global,
  },
  colors,
  components: {
    Card,
  },
});

export default theme;
