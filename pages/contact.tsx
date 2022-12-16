import {
  Box,
  chakra,
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
import Link from 'next/link';
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
              <Stack justifyContent="center" h="full" spacing={4} pb={16}>
                <Heading as="h2">Contact information</Heading>
                <Stack spacing={8} pl={4}>
                  <Box
                    borderLeftWidth={4}
                    borderColor="brand.600"
                    pl={4}
                    py={2}
                  >
                    <Text
                      textTransform="uppercase"
                      fontWeight="semibold"
                      color="gray.600"
                    >
                      Email
                    </Text>
                    <Link href="mailto:contact@keplux.com">
                      <chakra.span color="gray.500">
                        contact@keplux.com
                      </chakra.span>
                    </Link>
                  </Box>
                  <Stack
                    borderLeftWidth={4}
                    borderColor="brand.600"
                    pl={4}
                    py={2}
                  >
                    <Text
                      textTransform="uppercase"
                      fontWeight="semibold"
                      color="gray.600"
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
