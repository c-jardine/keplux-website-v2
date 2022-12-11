import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { GetServerSidePropsContext, NextPage } from 'next';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

const ReferralProgramSignInPage: NextPage = (props) => {
  const supabaseClient = useSupabaseClient();
  return (
    <Stack py={16} spacing={16} alignItems="center">
      <Box maxW="4xl" w="full" textAlign="center" mx="auto">
        <Heading as="h1">Sign in to your Referral Program account</Heading>
        <Text>Thank you for being a member of our Referral Program!</Text>
      </Box>
      <Container
        as={Stack}
        spacing={4}
        p={{ base: 4, md: 8 }}
        maxW="2xl"
        w="full"
        bg="white"
        rounded="lg"
        shadow="md"
      >
        <Auth
          redirectTo="/referral-program/dashboard"
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#4f46e5',
                  brandAccent: '#6366f1',
                  inputBorder: '#E2E8F0',
                  inputBorderHover: '#4f46e5',
                  inputBorderFocus: '#4f46e5',
                  defaultButtonBackgroundHover: '#F7FAFC',
                },
                fontSizes: {
                  baseInputSize: '13px',
                },
              },
            },
          }}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Email',
                password_label: 'Password',
                email_input_placeholder: 'EMAIL',
                password_input_placeholder: 'PASSWORD',
              },
              sign_up: {
                email_label: 'Email',
                password_label: 'Password',
                email_input_placeholder: 'EMAIL',
                password_input_placeholder: 'PASSWORD',
              },
              forgotten_password: {
                button_label: 'Reset password',
              },
            },
          }}
          supabaseClient={supabaseClient}
          providers={['google', 'facebook', 'linkedin', 'twitter']}
          socialLayout="horizontal"
        />
      </Container>
    </Stack>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const supabase = createServerSupabaseClient(context);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: '/referral-program/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};

export default ReferralProgramSignInPage;
