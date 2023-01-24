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
import logo from '../../../../public/keplux-logo-full-light.png';
import { KLink } from '../../core';

const Footer = () => {
  return (
    <Box
      bg="whiteAlpha.50"
      color="whiteAlpha.600"
      shadow="2xl"
      borderTopWidth={1}
      borderColor="whiteAlpha.300"
    >
      <Container maxW="6xl" w="full" py={16}>
        <Stack alignItems="center">
          <SimpleGrid columns={{ base: 1, lg: 3 }} gap={8} w="full">
            <Stack
              alignItems={{ base: 'center', lg: 'flex-start' }}
              spacing={8}
            >
              <Box position="relative" w="full" maxW={64}>
                <Image
                  src={logo}
                  alt="Keplux Development logo."
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Stack spacing={1} fontSize="sm" letterSpacing="wide">
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
                  color="whiteAlpha.800"
                >
                  Navigation
                </Text>
                <Divider w={16} borderWidth={2} borderColor="brand.600" />
              </Box>
              <Stack
                spacing={2}
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
                  color="whiteAlpha.800"
                >
                  About
                </Text>
                <Divider w={16} borderWidth={2} borderColor="brand.600" />
              </Box>
              <Stack spacing={1} fontSize="sm" letterSpacing="wide">
                <Text>
                  Keplux Development is a web design and development agency in
                  Toledo, OH. We provide custom web design and development
                  services, ecommerce websites, search engine optimization,
                  website hosting and maintenance, and more.
                </Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
