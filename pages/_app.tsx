import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Footer, Navbar } from '../src/components/sections';
import '../styles/globals.css';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        {!router.asPath.startsWith('/studio') && <Navbar />}
        <Box py={!router.asPath.startsWith('/studio') && 16}>
          <Component {...pageProps} />
        </Box>
        {!router.asPath.startsWith('/studio') && <Footer />}
      </ParallaxProvider>
    </ChakraProvider>
  );
};

export default App;
