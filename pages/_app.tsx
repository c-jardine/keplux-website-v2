import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Footer, Navbar } from '../src/components/sections';
import '../styles/globals.css';
import theme from '../styles/theme';
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        {!router.asPath.startsWith('/studio') && <Navbar />}
        <Box py={!router.asPath.startsWith('/studio') && 16}>
          <Component {...pageProps} />
        </Box>
        {!router.asPath.startsWith('/studio') && <Footer />}
      </ChakraProvider>
    </SessionProvider>
  );
};

export default App;
