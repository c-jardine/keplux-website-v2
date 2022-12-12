import {
  chakra,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Container,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import developmentIllustration from '../../../../public/illustrations/web-development.png';
import { SplitSection } from '../../sections';

const Development = () => {
  return (
    <Stack id="development" bg="brand.200" w="full" alignItems="center">
      <Container w="full" maxW="8xl">
        <SplitSection
          containerStyle={{
            maxW: '8xl',
            w: 'full',
            gap: { base: 0, lg: 16 },
            py: 16,
          }}
        >
          <SplitSection.LeftContent>
            <Box py={28}>
              <Heading as="h1" fontWeight="black">
                Modern web development
              </Heading>
              <Stack mt={6} color="gray.600">
                <Text>
                  By using modern tools like{' '}
                  <Link href="https://reactjs.org">
                    <chakra.span color="brand.600" fontWeight="semibold">
                      React.js
                    </chakra.span>
                  </Link>
                  , your website will be lightning fast. Frequently used tools
                  like WordPress and SquareSpace are often bloated with themes
                  and require additional plugins to be done right, and also
                  require maintenance and updates you may not have the time or
                  skills to perform.
                </Text>
                <Text>
                  With Keplux Development, the features you need are hand-coded
                  into your project. And with our Keplux One package, we&apos;ll
                  maintain and update your project for as long as you&apos;re a
                  customer.
                </Text>
              </Stack>
              <Button as={Link} href="/contact" colorScheme="brand" mt={8}>
                Contact Us
              </Button>
            </Box>
          </SplitSection.LeftContent>
          <SplitSection.RightContent>
            <Box
              display={{ base: 'none', lg: 'block' }}
              position="relative"
              w="full"
              h="full"
              minH={72}
            >
              <Image
                src={developmentIllustration}
                alt="A team building a website."
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </SplitSection.RightContent>
        </SplitSection>
      </Container>
    </Stack>
  );
};

export default Development;
