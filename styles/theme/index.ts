import { extendTheme } from '@chakra-ui/react';
import { Card } from './components';
import global from './styles/global';
import colors from './styles/colors';

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
