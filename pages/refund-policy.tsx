import { Box, Container, Heading, Stack, Text, chakra } from '@chakra-ui/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { KLink } from '../src/components/core';

const RefundPolicyPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Refund policy"
        description="View our refund policy. We aim to please, but sometimes you need to back out of a project for one reason or another."
        canonical="https://www.keplux.com/refund-policy"
      />
      <Container
        as={Stack}
        maxW="4xl"
        w="full"
        spacing={8}
        color="whiteAlpha.600"
      >
        <Stack>
          <Heading as="h1" color="whiteAlpha.800">
            Keplux Development Refund Policy
          </Heading>
          <Text fontWeight="semibold">
            Effective date: <chakra.span>December 13, 2022</chakra.span>.
          </Text>
          <Text>
            While we strive to provide the best service possible, we understand
            there may be times when you&apos;d like a refund. The specifics of
            your eligibility for a refund will be outlined in your Service
            Contract. See the remaining document to understand general scenarios
            where you may or may not be eligible for a refund.
          </Text>
        </Stack>
        <Box>
          <Heading as="h2" fontSize="xl" color="whiteAlpha.800">
            Retainer Fees
          </Heading>
          <Text>
            All projects require a 50%, non-refundable retainer fee to ensure
            clients, or potential clients, are serious about purchasing our
            services. This helps protect us from scam attempts.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" fontSize="xl" color="whiteAlpha.800">
            Services
          </Heading>
          <Text>
            Since every project is different, the specific refund policy for
            your project will be outlined in your Service Contract. However, in
            general, payments for services (excluding retainer fees) not yet
            performed by us are considered fully refundable. Should you choose
            to back out of a project that&apos;s actively in development, you
            may be eligible for a partial refund on services not yet performed.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" fontSize="xl" color="whiteAlpha.800">
            Questions, concerns, and complaints
          </Heading>
          <Text>
            If you have any questions, concerns, or complaints about our return
            policy, please contact us at{' '}
            <KLink href="mailto:contact@keplux.com" fontWeight="semibold">
              contact@keplux.com
            </KLink>{' '}
            and we&apos;d be happy to speak with you.
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default RefundPolicyPage;
