import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image as ChakraImage,
  Kbd,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  SlideFade,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart';
import { IoIosPaper } from '@react-icons/all-files/io/IoIosPaper';
import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { IconHeader } from '../src/components/core';

const SmallBusinessPricing = [
  {
    id: 1,
    heading: 'Website',
    description:
      'Choose one of our beautiful, high performance templates and provide content for up to 5 pages.',
  },
  {
    id: 2,
    heading: 'Responsive design',
    description:
      'We make sure your site looks great on mobile devices, desktop devices, and everything in between.',
  },
  {
    id: 3,
    heading: 'Unlimited content updates',
    description:
      "Need to make a change to the content on your website? Let us know and we'll take care of it!",
  },
  {
    id: 4,
    heading: 'Standard SEO and accessibility',
    description:
      'Help your page rank high in search engine results with crucial SEO and accessibility implementations.',
  },
  {
    id: 5,
    heading: 'Hosting',
    description:
      "Free hosting with one of our hosting providers. Includes a free SSL certificate created by Let's Encrypt.",
  },
  {
    id: 6,
    heading: 'Google Maps',
    description:
      'Show your visitors where your business is located with an interactive map provided by Google Maps.',
  },
  {
    id: 7,
    heading: '24/7 support and maintenance',
    description:
      "We're available at any time to provide service. We will also perform maintenance when necessary, such as patching security vulnerabilities.",
  },
  {
    id: 8,
    heading: 'Custom contact form',
    description:
      "Let users provide the information you need. We'll make sure it gets to your inbox.",
  },
];

const PricingPage: NextPage = () => {
  return (
    <>
      <Stack id="development" position="relative" w="full" alignItems="center">
        <Box position="absolute" w="full" h="full" top={0} left={0}>
          <ChakraImage
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="A person typing on a laptop at a desk."
            objectFit="cover"
            objectPosition="top"
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
                  color="white"
                  textAlign="center"
                >
                  Plan and package pricing
                </Heading>
                <Stack mt={6} color="whiteAlpha.800">
                  <Text textAlign="center">
                    Not all businesses require the same features on their
                    website. Whether you need something simple to showcase your
                    business or portfolio, or a platform to run your business
                    on, we&apos;ve got you covered.
                  </Text>
                </Stack>
              </Parallax>
            </Box>
          </SlideFade>
        </Container>
      </Stack>
      <Container position="relative" maxW="7xl" w="full" mt={-16}>
        <SimpleGrid
          columns={{ base: 1, xl: 4 }}
          bg="white"
          rounded="lg"
          shadow="lg"
        >
          <Stack gridColumn={{ xl: '1 / span 3' }}>
            <Box p={{ base: 4, md: 12 }}>
              <Heading as="h2">Small Business Starter</Heading>
              <Text>
                This package is designed for small business who don&apos;t need
                anything fancy--they just want a web presence for their
                business. It allows you to focus on your business because we
                manage everything for you.
              </Text>
            </Box>
            <Flex w="full" alignItems="center" gap={4} pl={{ base: 4, md: 8 }}>
              <Text
                w="fit-content"
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="black"
                color="brand.600"
              >
                What&apos;s included
              </Text>
              <Box h={0.25} flexGrow={1} bg="brand.50" />
            </Flex>
            <List
              as={SimpleGrid}
              columns={{ base: 1, md: 2 }}
              gap={8}
              p={{ base: 4, md: 8 }}
            >
              {SmallBusinessPricing.map((item) => (
                <ListItem key={item.id} display="flex">
                  <ListIcon as={FaCheck} color="green.500" mt={0.5} />
                  <Box>
                    <Heading as="h3" fontSize="md">
                      {item.heading}
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      {item.description}
                    </Text>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Stack>
          <Stack
            bg="brand.50"
            justifyContent="center"
            alignItems="center"
            roundedRight="lg"
            spacing={0}
            px={4}
            py={8}
          >
            <Text textTransform="uppercase" color="gray.600">
              No contract required
            </Text>
            <Text fontWeight="black" fontSize="6xl" lineHeight={1}>
              $150
            </Text>
            <Text
              textTransform="uppercase"
              fontWeight="semibold"
              color="gray.600"
            >
              per month
            </Text>
            <HStack pt={8}>
              <Button
                as="a"
                href="https://buy.stripe.com/cN2g0r2PYeRI0Zq145"
                target="_blank"
                rel="external"
                variant="primaryLink"
              >
                Buy now
              </Button>
              <Button as="a" href="/contact" variant="secondaryLink">
                Contact us
              </Button>
            </HStack>
            <Text
              pt={4}
              fontSize="xs"
              fontStyle="italic"
              color="blackAlpha.600"
            >
              To reduce spam and scams, a non-refundable retainer fee of $75 is
              required before work is performed.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      <Container mt={28} maxW="7xl" w="full">
        <Box>
          <Heading as="h2" fontWeight="black" textAlign="center">
            Other services
          </Heading>
          <Stack mt={2} color="gray.600">
            <Text textAlign="center">
              If you need more than the basics included in the Small Business
              Starter package, we can build a package with additional features.
            </Text>
          </Stack>
        </Box>
        <Kbd colorScheme="brand">shift</Kbd>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} mt={16}>
          <Stack
            bg="white"
            rounded="lg"
            shadow="lg"
            justifyContent="space-between"
          >
            <Stack p={{ base: 4, md: 8 }}>
              <Box pl={4} pt={4}>
                <IconHeader icon={FaShoppingCart} />
              </Box>
              <Heading as="h3" pt={4}>
                E-Commerce
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Looking to sell goods and/or services online? We&apos;ll help
                get you set up!
              </Text>
              <Text fontSize="sm" color="gray.600">
                If you already have a website, our e-commerce solutions can be
                customized to match your existing website. Otherwise, don&apos;t
                forget to purchase website development services as well!
              </Text>
            </Stack>
            <Stack
              bg="brand.50"
              justifyContent="center"
              alignItems="center"
              spacing={0}
              px={4}
              py={8}
            >
              <Text textTransform="uppercase" color="gray.600">
                Starts at
              </Text>
              <Text fontWeight="black" fontSize="6xl" lineHeight={1}>
                $495
              </Text>
              <HStack pt={8}>
                <Button
                  as="a"
                  href="https://buy.stripe.com/cN2g0r2PYeRI0Zq145"
                  target="_blank"
                  rel="external"
                  variant="primaryLink"
                >
                  Build package
                </Button>
                <Button as="a" href="/contact" variant="secondaryLink">
                  Contact us
                </Button>
              </HStack>
              <Text
                pt={4}
                fontSize="xs"
                fontStyle="italic"
                color="blackAlpha.600"
              >
                To reduce spam and scams, a non-refundable retainer fee of $250
                is required before work is performed.
              </Text>
            </Stack>
          </Stack>

          <Stack
            bg="white"
            rounded="lg"
            shadow="lg"
            justifyContent="space-between"
          >
            <Stack p={{ base: 4, md: 8 }}>
              <Box pl={4} pt={4}>
                <IconHeader icon={IoIosPaper} />
              </Box>
              <Heading as="h3" pt={4}>
                Content Management
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Whether you&apos;re a blogger, a realtor, a restaurant, or some
                other service provider, our content management systems can be
                customized to give you whatever control you need over your
                content.
              </Text>
              <Text fontSize="sm" color="gray.600">
                Make sure
              </Text>
            </Stack>
            <Stack
              bg="brand.50"
              justifyContent="center"
              alignItems="center"
              spacing={0}
              px={4}
              py={8}
            >
              <Text textTransform="uppercase" color="gray.600">
                Starts at
              </Text>
              <Text fontWeight="black" fontSize="6xl" lineHeight={1}>
                $495
              </Text>
              <HStack pt={8}>
                <Button
                  as="a"
                  href="https://buy.stripe.com/cN2g0r2PYeRI0Zq145"
                  target="_blank"
                  rel="external"
                  variant="primaryLink"
                >
                  Build package
                </Button>
                <Button as="a" href="/contact" variant="secondaryLink">
                  Contact us
                </Button>
              </HStack>
              <Text
                pt={4}
                fontSize="xs"
                fontStyle="italic"
                color="blackAlpha.600"
              >
                To reduce spam and scams, a non-refundable retainer fee of $250
                is required before work is performed.
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default PricingPage;
