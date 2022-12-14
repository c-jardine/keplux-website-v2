import {
  AbsoluteCenter,
  Box,
  Circle,
  Container,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { NextPage } from 'next';
import { KLink } from '../src/components/core';
import { ContactForm, SplitSection } from '../src/components/sections';
import { NextSeo } from 'next-seo';

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Get a free web development quote"
        description="Send us a message for a free quote for your new or updated website."
        canonical="https://www.keplux.com/contact"
      />
      <Stack alignItems="center" spacing={16}>
        <Container maxW="7xl" w="full">
          <Stack alignItems="center" spacing={12}>
            <Stack alignItems="center">
              <Heading
                as="h1"
                fontSize={['5xl', , '6xl', '7xl']}
                fontWeight="black"
                textAlign="center"
                color="black"
              >
                Send a message to get started or learn more
              </Heading>
              <Heading
                as="h2"
                maxW="2xl"
                w="full"
                fontSize="xl"
                textAlign="center"
                fontWeight="medium"
                color="gray.500"
              >
                Need a quote or looking for more information? Get in touch with
                one of the methods below and we&apos;ll get back to you soon.
              </Heading>
            </Stack>
          </Stack>
        </Container>

        <SplitSection
          containerStyle={{ maxW: '7xl', w: 'full', mx: 'auto', gap: 16 }}
        >
          <SplitSection.LeftContent>
            <ContactForm />
          </SplitSection.LeftContent>
          <SplitSection.RightContent>
            <Container w="full" h="full">
              <Stack justifyContent="flex-start" h="full">
                <Heading
                  as="h2"
                  bgGradient="linear-gradient(to-r, brand.600, brand.400)"
                  bgClip="text"
                  ml={8}
                >
                  Contact information
                </Heading>
                <Stack position="relative" spacing={0} top={-6}>
                  <HStack alignItems="flex-end">
                    <Stack
                      position="relative"
                      h="full"
                      spacing={0}
                      w="fit-content"
                      alignItems="center"
                    >
                      {/* Faded overlay */}
                      <AbsoluteCenter top={8} left={2} zIndex={1} h="full">
                        <Box
                          ml="-2px"
                          h="32px"
                          w={1}
                          bgGradient="linear-gradient(to-b, gray.50, transparent)"
                        />
                      </AbsoluteCenter>
                      {/* Main line */}
                      <Box
                        position="relative"
                        left={2}
                        h="full"
                        borderLeftWidth="1px"
                        borderColor="gray.400"
                        borderStyle="dashed"
                      />
                      {/* Marker */}
                      <Box position="absolute" bottom="34px" left={2}>
                        <AbsoluteCenter>
                          <Circle
                            bgGradient="linear-gradient(to-br, gray.600, gray.300)"
                            size={4}
                          />
                        </AbsoluteCenter>
                        <AbsoluteCenter>
                          <Circle bg="gray.50" size={3} />
                        </AbsoluteCenter>
                      </Box>
                    </Stack>
                    <Box position="relative" pt={8} left={6}>
                      <Text
                        textTransform="uppercase"
                        fontSize="sm"
                        fontWeight="semibold"
                      >
                        Email
                      </Text>
                      <KLink href="mailto:contact@keplux.com" color="gray.500">
                        contact@keplux.com
                      </KLink>
                    </Box>
                  </HStack>

                  <HStack alignItems="flex-end">
                    <Stack
                      position="relative"
                      h="full"
                      spacing={0}
                      w="fit-content"
                      alignItems="center"
                    >
                      {/* Main line */}
                      <Box
                        position="relative"
                        left={2}
                        h="full"
                        borderLeftWidth="1px"
                        borderColor="gray.400"
                        borderStyle="dashed"
                      />
                      {/* Faded overlay */}
                      <Box
                        position="absolute"
                        bottom={0}
                        left={2}
                        zIndex={1}
                        h={8}
                      >
                        <Box
                          ml="-2px"
                          h="full"
                          w={1}
                          bgGradient="linear-gradient(to-t, gray.50, transparent)"
                        />
                      </Box>
                      {/* Marker */}
                      <Box position="absolute" bottom="44px" left={2}>
                        <AbsoluteCenter>
                          <Circle
                            bgGradient="linear-gradient(to-br, gray.600, gray.300)"
                            size={4}
                          />
                        </AbsoluteCenter>
                        <AbsoluteCenter>
                          <Circle bg="gray.50" size={3} />
                        </AbsoluteCenter>
                      </Box>
                    </Stack>
                    <Stack position="relative" pt={6} left={6}>
                      <Text
                        textTransform="uppercase"
                        fontSize="sm"
                        fontWeight="semibold"
                      >
                        Social Media
                      </Text>
                      <HStack>
                        <KLink
                          href="https://www.facebook.com/kepluxdev/"
                          target="_blank"
                        >
                          <Icon
                            as={FaFacebook}
                            w={5}
                            h={5}
                            color="gray.500"
                            _hover={{ color: 'black' }}
                            transition="200ms ease-in-out"
                            cursor="pointer"
                          />
                        </KLink>
                        <KLink
                          href="https://www.linkedin.com/company/keplux-development/"
                          target="_blank"
                        >
                          <Icon
                            as={FaLinkedinIn}
                            w={5}
                            h={5}
                            color="gray.500"
                            _hover={{ color: 'black' }}
                            transition="200ms ease-in-out"
                            cursor="pointer"
                          />
                        </KLink>
                      </HStack>
                    </Stack>
                  </HStack>
                </Stack>
              </Stack>
            </Container>
          </SplitSection.RightContent>
        </SplitSection>
      </Stack>
    </>
  );
};

export default ContactPage;
