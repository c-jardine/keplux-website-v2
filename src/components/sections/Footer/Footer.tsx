import {
  Box,
  Container,
  Divider,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
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
              <Flex pt={2} alignSelf="flex-start" alignItems="center" gap={2}>
                <Icon as={FaEnvelope} />
                <KLink
                  href="mailto:contact@keplux.com"
                  fontSize="sm"
                  textTransform="uppercase"
                >
                  contact@keplux.com
                </KLink>
              </Flex>
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
                  Solutions
                </Text>
                <Divider w={16} borderWidth={2} borderColor="brand.600" />
              </Box>
              <Stack
                spacing={1}
                fontSize="sm"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                <KLink href="/solutions#development">Development</KLink>
                <KLink href="/solutions#ecommerce">E-Commerce</KLink>
                <KLink href="/solutions#content-management">
                  Content Management
                </KLink>
                <KLink href="/solutions#hosting">Hosting</KLink>
                <KLink href="/solutions#analytics">Analytics</KLink>
                <KLink href="/solutions#maintenance">Maintenance</KLink>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
