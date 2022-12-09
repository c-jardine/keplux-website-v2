import { Box, Container, Stack } from '@chakra-ui/react';
import { NextPage } from 'next';
import {
  Faq,
  ProgramSteps,
  ReferAFriendSection,
  ReferralHeader,
  ReferralPayoutChart,
} from '../src/components/pageContents/referralProgram';

const ReferralProgramPage: NextPage = () => {
  return (
    <Box w="100vw" overflow="hidden">
      <Container
        as={Stack}
        spacing={28}
        alignItems="center"
        maxW="8xl"
        w="full"
        py={16}
      >
        <ReferralHeader />
        <ProgramSteps />
        <ReferAFriendSection />
        <ReferralPayoutChart />
        <Faq />
      </Container>
    </Box>
  );
};

export default ReferralProgramPage;
