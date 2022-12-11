import { extendTheme } from '@chakra-ui/react';
import { Card, Input } from './components';
import colors from './styles/colors';
import global from './styles/global';

const theme = extendTheme({
  styles: {
    global,
  },
  colors,
  components: {
    Card,
    Input,
  },
});

export default theme;
