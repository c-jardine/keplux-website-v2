import { Container, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import { getSession } from 'next-auth/react';

const ReferralProgramDashboardPage: NextPage = () => {
  return (
    <Container>
      <Heading as="h1">Welcome</Heading>
    </Container>
  );
};

export const getServerSideProps = async (context) => {
  const { res } = context;
  const session = await getSession(context);

  if (!session) {
    res.writeHead(302, {
      Location: '/',
    });
    return res.end();
  }

  return {
    props: { session },
  };
};

export default ReferralProgramDashboardPage;
