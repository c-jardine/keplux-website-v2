import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { KLink, ProcessStep } from '../../../core';

const ProgramSteps = () => {
  return (
    <Stack position="relative" w="full" alignItems="center">
      <Box position="absolute" w="full" h="full" top={-24} left={'-75%'}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#eef2ff"
            d="M34.9,-59.3C48.4,-52.7,64.8,-49.7,72.7,-40.5C80.6,-31.2,80.1,-15.6,77.3,-1.6C74.6,12.4,69.6,24.9,63.9,37.9C58.2,51,51.7,64.7,41,71.4C30.2,78.1,15.1,77.8,-0.7,79.1C-16.6,80.4,-33.2,83.3,-45.2,77.3C-57.1,71.3,-64.5,56.4,-68.4,42C-72.3,27.6,-72.9,13.8,-74.6,-1C-76.3,-15.8,-79.2,-31.6,-75.2,-45.7C-71.1,-59.9,-60,-72.3,-46.3,-78.9C-32.6,-85.5,-16.3,-86.2,-2.8,-81.3C10.7,-76.5,21.4,-66,34.9,-59.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </Box>
      <Stack position="relative" maxW="4xl" w="full" textAlign="center">
        <Heading as="h2">Earning money with us is easy!</Heading>
        <Text>
          Our referral program is designed with individuals in mind. If
          you&apos;re a business that would like to work with us, please{' '}
          <KLink href="/contact" color="brand.600" fontWeight="semibold">
            contact us
          </KLink>{' '}
          instead. The referral program works like this:
        </Text>
      </Stack>
      <Stack position="relative" pt={8} spacing={12} maxW="2xl" w="full">
        <ProcessStep
          step="1"
          heading="Create an account"
          description="Your account will give you access to the referral program, including access to the referral form, a list of your referrals and their status, and your payout history and options."
        />
        <Box alignSelf="flex-end">
          <ProcessStep
            step="2"
            heading="Choose a payout method"
            description="Tell us how you want to receive your referral payments. You can choose to receive a check free or receive payments directly into your bank account for a small processing fee."
            flip
          />
        </Box>
        <ProcessStep
          step="3"
          heading="Start sending referrals"
          description="Give us the contact information for the person or business you're referring to us. You will be able to track the status of your referrals in the dashboard."
        />
        <Box alignSelf="flex-end">
          <ProcessStep
            step="4"
            heading="Get paid"
            description="When we close on a deal, you'll automatically be paid! Please note that referral payments qualify as taxable income. See the FAQ for more information."
            flip
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProgramSteps;
