import { Box, ChakraProvider } from '@chakra-ui/react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Session, SessionContextProvider } from '@supabase/auth-helpers-react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import { Footer, Navbar } from '../src/components/sections';
import '../styles/globals.css';
import theme from '../styles/theme';

const App = ({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) => {
  const router = useRouter();

  // Create a new supabase browser client on every first render.
  const [supabaseClient] = React.useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ChakraProvider theme={theme}>
        {!router.asPath.startsWith('/studio') && <Navbar />}
        <Box py={!router.asPath.startsWith('/studio') && 16}>
          <Component {...pageProps} />
        </Box>
        {!router.asPath.startsWith('/studio') && <Footer />}
      </ChakraProvider>
    </SessionContextProvider>
  );
};

export default App;
