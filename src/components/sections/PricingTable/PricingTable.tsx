import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Show,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import PricingTableDesktop from './PricingTableDesktop';
import PricingTableMobile from './PricingTableMobile';
import PlanPricing from './constants/planPricing';

const PricingTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bundle, setBundle] = React.useState<
    'starter' | 'professional' | 'ecommerce' | 'ultimate'
  >('starter');

  const _handleChange = (
    value: 'starter' | 'professional' | 'ecommerce' | 'ultimate'
  ) => {
    setBundle(value);
    onClose();
  };

  return (
    <Box>
      <Show below="md">
        <Flex
          position="sticky"
          top={16}
          maxW="5xl"
          w="full"
          mx="auto"
          placeItems="center"
          borderBottomWidth={2}
          borderColor="whiteAlpha.300"
          py={4}
          bg="black"
          zIndex={1}
        >
          <Container
            as={Flex}
            maxW="4xl"
            w="full"
            justifyContent="space-between"
          >
            <Text
              color="whiteAlpha.800"
              fontWeight="semibold"
              textTransform="capitalize"
            >
              {bundle === 'ecommerce' ? 'E-Commerce' : bundle}
            </Text>
            <Button
              variant="unstyled"
              onClick={onOpen}
              fontSize="xs"
              borderWidth={1}
              borderColor="brand.600"
              h="fit-content"
              fontWeight="light"
            >
              <Text px={2} py={1} color="whiteAlpha.600">
                Switch plan
              </Text>
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
              <DrawerOverlay backdropFilter="blur(8px)" />
              <DrawerContent
                bg="black"
                borderTopWidth={1}
                borderColor="whiteAlpha.300"
              >
                <DrawerHeader color="whiteAlpha.800">Select plan</DrawerHeader>
                <DrawerBody as={Stack}>
                  <Button
                    variant="ghost"
                    color={
                      bundle === 'starter' ? 'whiteAlpha.800' : 'whiteAlpha.600'
                    }
                    justifyContent="flex-start"
                    textTransform="capitalize"
                    fontWeight="light"
                    onClick={() => _handleChange('starter')}
                  >
                    Starter
                  </Button>
                  <Button
                    variant="ghost"
                    color={
                      bundle === 'professional'
                        ? 'whiteAlpha.800'
                        : 'whiteAlpha.600'
                    }
                    justifyContent="flex-start"
                    textTransform="capitalize"
                    fontWeight="light"
                    onClick={() => _handleChange('professional')}
                  >
                    Professional
                  </Button>
                  <Button
                    variant="ghost"
                    color={
                      bundle === 'ecommerce'
                        ? 'whiteAlpha.800'
                        : 'whiteAlpha.600'
                    }
                    justifyContent="flex-start"
                    textTransform="capitalize"
                    fontWeight="light"
                    onClick={() => _handleChange('ecommerce')}
                  >
                    E-Commerce
                  </Button>
                  <Button
                    variant="ghost"
                    color={
                      bundle === 'ultimate'
                        ? 'whiteAlpha.800'
                        : 'whiteAlpha.600'
                    }
                    justifyContent="flex-start"
                    textTransform="capitalize"
                    fontWeight="light"
                    onClick={() => _handleChange('ultimate')}
                  >
                    Ultimate
                  </Button>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Container>
        </Flex>
      </Show>

      <Show above="md">
        <Box
          position="sticky"
          top={16}
          borderBottomWidth={1}
          borderColor="whiteAlpha.300"
          py={4}
          bg="black"
          zIndex={1}
        >
          <Container maxW="7xl" w="full">
            <SimpleGrid
              maxW="7xl"
              w="full"
              mx="auto"
              templateColumns="2fr 1fr 1fr 1fr 1fr"
              gap={2}
            >
              <Box />
              <Stack alignItems="center" w="full">
                <Text color="whiteAlpha.800" fontWeight="semibold">
                  Starter
                </Text>
                <Button
                  as={Link}
                  href="/contact"
                  target={'_blank'}
                  rel={'noreferrer'}
                  bg="black"
                  borderWidth={2}
                  borderColor="black"
                  w="full"
                  _hover={{
                    bg: 'black',
                    color: 'black',
                    textDecoration: 'none',
                  }}
                  color="white"
                  fontSize="sm"
                  letterSpacing="wide"
                  textTransform="none"
                  role="group"
                >
                  Get Started
                </Button>
              </Stack>
              <Stack alignItems="center">
                <Text color="whiteAlpha.800" fontWeight="semibold">
                  Professional
                </Text>
                <Button
                  as={Link}
                  href="/contact"
                  target={'_blank'}
                  rel={'noreferrer'}
                  bg="black"
                  borderWidth={2}
                  borderColor="black"
                  w="full"
                  _hover={{
                    bg: 'black',
                    color: 'black',
                    textDecoration: 'none',
                  }}
                  color="white"
                  fontSize="sm"
                  letterSpacing="wide"
                  textTransform="none"
                  role="group"
                >
                  Get Started
                </Button>
              </Stack>
              <Stack alignItems="center">
                <Text color="whiteAlpha.800" fontWeight="semibold">
                  E-Commerce
                </Text>
                <Button
                  as={Link}
                  href="/contact"
                  target={'_blank'}
                  rel={'noreferrer'}
                  bg="black"
                  borderWidth={2}
                  borderColor="black"
                  w="full"
                  _hover={{
                    bg: 'black',
                    color: 'black',
                    textDecoration: 'none',
                  }}
                  color="white"
                  fontSize="sm"
                  letterSpacing="wide"
                  textTransform="none"
                  role="group"
                >
                  Get Started
                </Button>
              </Stack>
              <Stack alignItems="center">
                <Text color="whiteAlpha.800" fontWeight="semibold">
                  Ultimate
                </Text>
                <Button
                  as={Link}
                  href="/contact"
                  target={'_blank'}
                  rel={'noreferrer'}
                  bg="black"
                  borderWidth={2}
                  borderColor="black"
                  w="full"
                  _hover={{
                    bg: 'black',
                    color: 'black',
                    textDecoration: 'none',
                  }}
                  color="white"
                  fontSize="sm"
                  letterSpacing="wide"
                  textTransform="none"
                  role="group"
                >
                  Get Started
                </Button>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
      </Show>

      <Show below="md">
        <Stack
          justifyContent="space-between"
          alignItems="center"
          roundedRight="lg"
          spacing={0}
          px={{ base: 4, md: 8 }}
          py={{ base: 8, md: 12 }}
        >
          <Stack alignItems="center">
            {PlanPricing[bundle].abovePrice && (
              <Text textTransform="uppercase" color="whiteAlpha.600">
                {PlanPricing[bundle].abovePrice}
              </Text>
            )}
            <Text
              fontWeight="black"
              fontSize="6xl"
              lineHeight={1}
              color="whiteAlpha.800"
            >
              {PlanPricing[bundle].price}
            </Text>
            {PlanPricing[bundle].belowPrice && (
              <Text
                textTransform="uppercase"
                fontWeight="semibold"
                color="whiteAlpha.600"
              >
                {PlanPricing[bundle].belowPrice}
              </Text>
            )}
          </Stack>
        </Stack>
      </Show>

      <Container position="relative" maxW="7xl" w="full">
        <Box>
          <Show above="md">
            <PricingTableDesktop />
          </Show>
          <Show below="md">
            <PricingTableMobile bundle={bundle} />
          </Show>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingTable;
