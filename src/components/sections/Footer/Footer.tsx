import {
  Box,
  Container,
  Divider,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import Image from 'next/image';
import logo from '../../../../public/keplux-logo-full-dark.png';
import { KLink } from '../../core';

const Footer = () => {
  return (
    <Box bg="white" shadow="2xl">
      <Container maxW="4xl" w="full" py={16}>
        <Stack alignItems="center">
          <SimpleGrid columns={{ base: 1, lg: 3 }} gap={16} w="full">
            <Stack alignItems={{ base: 'center', lg: 'flex-start' }}>
              <Box position="relative" w="full" maxW={64}>
                <Image
                  src={logo}
                  alt="Keplux Development logo."
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Text mt={2} fontSize="xs" color="gray.500">
                &#169; 2022 Keplux Development, LLC.
              </Text>
            </Stack>
            <Stack>
              <Box>
                <Text
                  fontSize="xl"
                  textTransform="uppercase"
                  fontWeight="semibold"
                >
                  Navigation
                </Text>
                <Divider w={16} borderWidth={2} borderColor="brand.600" />
              </Box>
              <Stack
                spacing={1}
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                <KLink href="/">Home</KLink>
                <KLink href="/pricing">Pricing</KLink>
                <KLink href="/our-work">Our Work</KLink>
                <KLink href="/blog">Blog</KLink>
                <KLink href="/referral-program">Referral Program</KLink>
                <KLink href="/contact">Contact</KLink>
              </Stack>
            </Stack>
            <Stack>
              <Box>
                <Text
                  fontSize="xl"
                  textTransform="uppercase"
                  fontWeight="semibold"
                >
                  Contact
                </Text>
                <Divider w={16} borderWidth={2} borderColor="brand.600" />
              </Box>
              <Stack
                spacing={1}
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                <KLink href="mailto:contact@keplux.com">
                  contact@keplux.com
                </KLink>
                <HStack>
                  <KLink
                    href="https://www.facebook.com/kepluxdev/"
                    target="_blank"
                  >
                    <Icon
                      as={FaFacebook}
                      w={5}
                      h={5}
                      _hover={{ color: 'brand.500' }}
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
                      _hover={{ color: 'brand.500' }}
                      transition="200ms ease-in-out"
                      cursor="pointer"
                    />
                  </KLink>
                </HStack>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
