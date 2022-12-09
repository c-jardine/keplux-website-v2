import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import paymentIllustration from '../../../../../public/illustrations/payments.png';
import { SplitSection } from '../../../sections';

const ReferralHeader = () => {
  return (
    <SplitSection containerStyle={{ maxW: '6xl', w: 'full' }}>
      <SplitSection.LeftContent>
        <Box py={16}>
          <Heading as="h1" fontWeight="black">
            Join our referral program and start earning today!
          </Heading>
          <Stack mt={6} color="gray.600">
            <Text>
              Know an individual or business that could benefit from Keplux
              Development&apos;s services? Let us know about them and we&apos;ll
              pay you if we make a sale!
            </Text>
            <Text>
              This program is 100%-free to join and requires no financial
              investment from you. There really are no strings attached!
            </Text>
          </Stack>
          <Button colorScheme="brand" mt={8}>
            Join Now
          </Button>
        </Box>
      </SplitSection.LeftContent>
      <SplitSection.RightContent>
        <Box position="relative" w="full" h="full" minH={72}>
          <Image
            src={paymentIllustration}
            alt="A piggy bank, calculator, stack of money, and paid invoice."
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </SplitSection.RightContent>
    </SplitSection>
  );
};

export default ReferralHeader;
