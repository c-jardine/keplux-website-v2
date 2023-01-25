import { Box, ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Footer, Navbar } from '../src/components/sections';
import '../styles/globals.css';
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

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
          themeColor="black"
        />
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
  );
};

export default App;
