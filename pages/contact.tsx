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

const ContactPage: NextPage = () => {
  return (
    <>
      <Stack alignItems="center" spacing={16} py={28}>
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
              <Stack justifyContent="flex-start" h="full" pb={16}>
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
                      <Box position="absolute" bottom="82px" left={2}>
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
                    <Stack position="relative" pt={6} pb={10} left={6}>
                      <Text
                        textTransform="uppercase"
                        fontSize="sm"
                        fontWeight="semibold"
                      >
                        Social Media
                      </Text>
                      <HStack>
                        <Icon
                          as={FaFacebook}
                          color="gray.500"
                          w={6}
                          h={6}
                          _hover={{ color: 'black' }}
                          transition="200ms ease-in-out"
                          cursor="pointer"
                        />
                        <Icon
                          as={FaLinkedinIn}
                          color="gray.500"
                          w={6}
                          h={6}
                          _hover={{ color: 'black' }}
                          transition="200ms ease-in-out"
                          cursor="pointer"
                        />
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
