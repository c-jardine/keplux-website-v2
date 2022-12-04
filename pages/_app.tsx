import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Box bg="gray.50">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
