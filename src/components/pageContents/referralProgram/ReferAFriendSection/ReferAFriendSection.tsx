import { Box, Button, Heading, Link, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import moneyIllustration from '../../../../../public/illustrations/money.png';
import { SplitSection } from '../../../sections';

const ReferAFriendSection = () => {
  return (
    <Box position="relative">
      <Box position="absolute" w="full" h="full" top={-24} right={'-75%'}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#eef2ff"
            d="M37.4,-68.5C48.2,-58.6,56.5,-48,65.6,-36.4C74.7,-24.9,84.7,-12.5,88.1,2C91.5,16.4,88.3,32.8,79.4,44.7C70.5,56.5,55.8,63.9,41.6,67.5C27.5,71,13.7,70.8,-1.2,72.9C-16.2,75,-32.3,79.5,-46.3,75.8C-60.2,72.1,-71.9,60.2,-78,46.2C-84,32.2,-84.4,16.1,-83.9,0.3C-83.5,-15.5,-82.1,-31.1,-73.7,-41.1C-65.4,-51.1,-50.1,-55.7,-36.6,-64.1C-23.2,-72.6,-11.6,-84.9,0.9,-86.4C13.3,-87.8,26.6,-78.5,37.4,-68.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </Box>
      <SplitSection
        containerStyle={{ position: 'relative', maxW: '6xl', w: 'full' }}
      >
        <SplitSection.LeftContent>
          <Box position="relative" w="full" h="full" minH={72}>
            <Image
              src={moneyIllustration}
              alt="Money going into a wallet with debit/credit cards."
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </SplitSection.LeftContent>
        <SplitSection.RightContent>
          <Box py={16}>
            <Heading as="h2" fontWeight="black">
              Earn more by telling your friends!
            </Heading>
            <Stack mt={6}>
              <Text>
                Know someone else that might be interested in our Referral
                Program? Send them a your personal sign up link located on your
                dashboard. When their first referral closes, you&apos;ll receive
                an additional $50!
              </Text>
            </Stack>
            <Button as={Link} href="#faq" colorScheme="brand" mt={8}>
              Learn more
            </Button>
          </Box>
        </SplitSection.RightContent>
      </SplitSection>
    </Box>
  );
};

export default ReferAFriendSection;
