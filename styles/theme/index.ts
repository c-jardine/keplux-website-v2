import { extendTheme } from '@chakra-ui/react';
import { Button, Card, Input } from './components';
import colors from './styles/colors';
import global from './styles/global';
import Textarea from './components/Textarea';

const theme = extendTheme({
  styles: {
    global,
  },
  colors,
  components: {
    Card,
    Input,
    Textarea,
    Button,
  },
});

export default theme;
