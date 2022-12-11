import { Container, Heading } from '@chakra-ui/react';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { GetServerSidePropsContext, NextPage } from 'next';

const ReferralProgramDashboardPage: NextPage = () => {
  return (
    <Container>
      <Heading as="h1">Welcome</Heading>
    </Container>
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

  if (Object.keys(session.user.user_metadata).length === 0) {
    return {
      redirect: {
        destination: '/referral-program/profile',
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

export default ReferralProgramDashboardPage;
