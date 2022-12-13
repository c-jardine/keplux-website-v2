import {
  chakra,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  Container,
  Image as ChakraImage,
  SlideFade,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import developmentIllustration from '../../../../public/illustrations/web-development.png';
import { SplitSection } from '../../sections';

const Development = () => {
  return (
    <Stack id="development" position="relative" w="full" alignItems="center">
      <Box position="absolute" w="full" h="full" top={0} left={0}>
        <ChakraImage
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
          objectFit="cover"
          w="full"
          h="full"
        />
        <Box
          position="absolute"
          top={0}
          bgGradient="linear-gradient(to-br, brand.600, brand.300)"
          w="full"
          h="full"
          opacity={0.95}
        />
      </Box>
      <Container w="full" maxW="7xl" position="relative">
        <SplitSection
          containerStyle={{
            maxW: '8xl',
            w: 'full',
            gap: { base: 0, lg: 16 },
            py: 16,
          }}
        >
          <SplitSection.LeftContent>
            <SlideFade in={true}>
              <Box py={28}>
                <Heading as="h1" fontWeight="black" color="brand.200">
                  Modern{' '}
                  <chakra.span color="white">web development</chakra.span>
                </Heading>
                <Stack mt={6} color="whiteAlpha.800">
                  <Text>
                    By using modern tools like{' '}
                    <Link href="https://reactjs.org">
                      <chakra.span color="brand.50" fontWeight="semibold">
                        React.js
                      </chakra.span>
                    </Link>
                    , your website will be lightning fast. Frequently used tools
                    like WordPress and SquareSpace are often bloated and require
                    time and skills to maintain that you may not have.
                  </Text>
                  <Text>
                    With Keplux Development, the features you need are
                    hand-coded into your project. And with our Keplux One
                    package, we&apos;ll maintain and update your project for as
                    long as you&apos;re a customer.
                  </Text>
                </Stack>
                <Button as={Link} href="/contact" colorScheme="gray" mt={8}>
                  Contact Us
                </Button>
              </Box>
            </SlideFade>
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
