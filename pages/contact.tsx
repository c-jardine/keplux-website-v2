import {
  AbsoluteCenter,
  Box,
  Circle,
  Container,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { BasicHeader, KLink } from '../src/components/core';
import { ContactForm, SplitSection } from '../src/components/sections';

const ContactPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Get a free web development quote"
        description="Send us a message for a free quote for your new or updated website."
        canonical="https://www.keplux.com/contact"
      />
      <Stack alignItems="center" spacing={16}>
        <BasicHeader
          title="Send a message to get started or learn more"
          subtitle="Need a quote or looking for more information? Get in touch with one of the methods below and we'll get back to you soon."
        />

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
                      spacing={0}
                      alignItems="center"
                      mt={8}
                      w="fit-content"
                    >
                      <AbsoluteCenter top={4} zIndex={1}>
                        <Box
                          ml="-2px"
                          h={8}
                          w={1}
                          bgGradient="linear-gradient(to-b, black, transparent)"
                        />
                      </AbsoluteCenter>
                      <Box
                        position="relative"
                        left="-1px"
                        h={8}
                        borderLeftWidth="1px"
                        borderColor="whiteAlpha.400"
                        borderStyle="dashed"
                      />
                      <Box position="relative" bg="black" p={3}>
                        <AbsoluteCenter>
                          <Circle
                            bgGradient="linear-gradient(to-br, whiteAlpha.600, whiteAlpha.400)"
                            size={4}
                          />
                        </AbsoluteCenter>
                        <AbsoluteCenter>
                          <Circle bg="black" size={3} />
                        </AbsoluteCenter>
                      </Box>
                    </Stack>
                    <Box position="relative" top="22px" left={6}>
                      <Text
                        textTransform="uppercase"
                        fontSize="sm"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                      >
                        Email
                      </Text>
                      <KLink
                        href="mailto:contact@keplux.com"
                        color="whiteAlpha.600"
                      >
                        contact@keplux.com
                      </KLink>
                    </Box>
                  </HStack>

                  <HStack alignItems="flex-end">
                    <Stack
                      position="relative"
                      spacing={0}
                      alignItems="center"
                      w="fit-content"
                    >
                      <AbsoluteCenter top={8} zIndex={1}>
                        <Box
                          ml="-2px"
                          h={16}
                          w={1}
                          // bgGradient="linear-gradient(to-b, black, transparent)"
                        />
                      </AbsoluteCenter>
                      <Box
                        position="relative"
                        left="-1px"
                        h={16}
                        borderLeftWidth="1px"
                        borderColor="whiteAlpha.400"
                        borderStyle="dashed"
                      />
                      <Box position="relative" bg="black" p={3}>
                        <AbsoluteCenter>
                          <Circle
                            bgGradient="linear-gradient(to-br, whiteAlpha.600, whiteAlpha.400)"
                            size={4}
                          />
                        </AbsoluteCenter>
                        <AbsoluteCenter>
                          <Circle bg="black" size={3} />
                        </AbsoluteCenter>
                      </Box>
                    </Stack>
                    <Stack position="relative" top={8} left={6}>
                      <Text
                        textTransform="uppercase"
                        fontSize="sm"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
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
                            color="whiteAlpha.600"
                            _hover={{ color: 'whiteAlpha.800' }}
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
                            color="whiteAlpha.600"
                            _hover={{ color: 'whiteAlpha.800' }}
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
