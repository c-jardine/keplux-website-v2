import { Box, ChakraProvider } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ParallaxProvider } from 'react-scroll-parallax';
import seoConfig from '../next-seo.config';
import { Footer, Navbar } from '../src/components/sections';
import '../styles/globals.css';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
  const router = useRouter();

  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <ParallaxProvider>
          <DefaultSeo {...seoConfig} />
          {!router.asPath.startsWith('/studio') && <Navbar />}
          <Box
            pt={!router.asPath.startsWith('/studio') && 44}
            pb={!router.asPath.startsWith('/studio') && 28}
          >
            <Component {...pageProps} />
          </Box>
          {!router.asPath.startsWith('/studio') && <Footer />}
        </ParallaxProvider>
      </ChakraProvider>
    </SessionProvider>
  );
};

export default App;
