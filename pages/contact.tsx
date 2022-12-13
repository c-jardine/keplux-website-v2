import {
  Box,
  Button,
  chakra,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Image as ChakraImage,
  Input,
  SlideFade,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { NextPage } from 'next';
import Link from 'next/link';
import { SplitSection } from '../src/components/sections';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { Parallax } from 'react-scroll-parallax';

const ContactPage: NextPage = () => {
  return (
    <>
      <Stack id="development" position="relative" w="full" alignItems="center">
        <Box position="absolute" w="full" h="full" top={0} left={0}>
          <ChakraImage
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="A person typing on a laptop at a desk."
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
        <Container w="full" maxW="4xl" position="relative">
          <SlideFade in={true}>
            <Box pt={32} pb={56}>
              <Parallax speed={-10}>
                <Heading
                  as="h1"
                  fontWeight="black"
                  color="brand.200"
                  textAlign="center"
                >
                  Ready to <chakra.span color="white">get started</chakra.span>?
                  Want more information?
                </Heading>
                <Stack mt={6} color="whiteAlpha.800">
                  <Text textAlign="center">
                    Contact us now to get started on a project or request
                    additional information. We&apos;ll get back to you within 24
                    hours.
                  </Text>
                </Stack>
              </Parallax>
            </Box>
          </SlideFade>
        </Container>
      </Stack>
      <SplitSection
        containerStyle={{ maxW: '7xl', w: 'full', mx: 'auto', gap: 16 }}
      >
        <SplitSection.LeftContent>
          <Container position="relative" mt={-16} maxW="2xl" w="full">
            <Box
              p={{ base: 4, md: 8 }}
              rounded="lg"
              borderBottomWidth={5}
              borderColor="brand.600"
              shadow="lg"
              bg="white"
            >
              <Heading as="h2">Send a message</Heading>
              <Text>Enter your information below</Text>
              <Stack mt={8} spacing={4}>
                <FormControl>
                  <FormLabel
                    fontSize="sm"
                    textTransform="uppercase"
                    fontWeight="semibold"
                  >
                    Name
                  </FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontSize="sm"
                    textTransform="uppercase"
                    fontWeight="semibold"
                  >
                    Email
                  </FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontSize="sm"
                    textTransform="uppercase"
                    fontWeight="semibold"
                  >
                    Phone number
                  </FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontSize="sm"
                    textTransform="uppercase"
                    fontWeight="semibold"
                  >
                    Message
                  </FormLabel>
                  <Textarea />
                </FormControl>
                <Button colorScheme="brand">Send</Button>
              </Stack>
            </Box>
          </Container>
        </SplitSection.LeftContent>
        <SplitSection.RightContent>
          <Container w="full" h="full">
            <Stack justifyContent="center" h="full" spacing={4} pb={16}>
              <Heading as="h2">Contact information</Heading>
              <Stack spacing={8} pl={4}>
                <Box borderLeftWidth={4} borderColor="brand.600" pl={4} py={2}>
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
    </>
  );
};

export default ContactPage;
