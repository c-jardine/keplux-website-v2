import { Box, ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import { hotjar } from 'react-hotjar';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Footer, Navbar } from '../src/components/sections';
import '../styles/globals.css';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Hotjar
  React.useEffect(() => {
    hotjar.initialize(3288819, 1);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        <DefaultSeo
          titleTemplate="%s | Keplux Development"
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://www.keplux.com',
            siteName: 'Keplux Development',
            images: [
              {
                url: 'https://i.imgur.com/5qsDLWr.png',
              },
            ],
          }}
          twitter={{
            handle: '@kepluxdev',
            site: '@kepluxdev',
            cardType: 'summary_large_image',
          }}
        />
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
