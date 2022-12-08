import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Navbar } from '../src/components/core';
import '../styles/globals.css';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box py={16}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
