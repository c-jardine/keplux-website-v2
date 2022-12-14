import {
  Box,
  Container,
  Divider,
  Flex,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../../../../public/keplux-logo-full-dark.png';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';

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
                <Link
                  href="mailto:contact@keplux.com"
                  fontSize="sm"
                  textTransform="uppercase"
                >
                  contact@keplux.com
                </Link>
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
                <Link href="/">Home</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/our-work">Our Work</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/referral-program">Referral Program</Link>
                <Link href="/contact">Contact</Link>
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
                <Link href="/solutions#development">Development</Link>
                <Link href="/solutions#ecommerce">E-Commerce</Link>
                <Link href="/solutions#content-management">
                  Content Management
                </Link>
                <Link href="/solutions#hosting">Hosting</Link>
                <Link href="/solutions#analytics">Analytics</Link>
                <Link href="/solutions#maintenance">Maintenance</Link>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
