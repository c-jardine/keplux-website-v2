import {
  AbsoluteCenter,
  Box,
  Center,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaDollarSign } from '@react-icons/all-files/fa/FaDollarSign';
import { FaPlug } from '@react-icons/all-files/fa/FaPlug';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import { IoIosPaper } from '@react-icons/all-files/io/IoIosPaper';
import swellOrders from '../../../../public/images/swell-ecommerce-orders.png';
import { KLightbox, KLink } from '../../core';
import { LeadInHeading, SplitSection } from '../../sections';

const EcommerceSection = () => {
  return (
    <Container maxW="7xl" w="full">
      <Stack alignItems="center" w="full" spacing={8}>
        <LeadInHeading
          smallText="Start selling online"
          heading="Headless E-Commerce"
          icon={IoIosPaper}
          color={['cyan.600', 'cyan.400']}
        />
        <Stack alignItems="center" spacing={16} w="full">
          <Stack alignItems="center">
            <Heading
              as="h4"
              maxW="3xl"
              w="full"
              textAlign="center"
              color="whiteAlpha.800"
            >
              Customizable e-commerce platform
            </Heading>
            <Text
              maxW="xl"
              w="full"
              fontSize="xl"
              textAlign="center"
              color="whiteAlpha.600"
            >
              Fully customizable e-commerce platform that looks and performs the
              way you want it to.
            </Text>
          </Stack>
          <SplitSection containerStyle={{ maxW: '6xl', w: 'full', gap: 16 }}>
            <SplitSection.LeftContent>
              <Stack spacing={16} justifyContent="center" h="full">
                <Box position="relative">
                  <AbsoluteCenter w="85%" h="85%" zIndex={0}>
                    <Box
                      h="full"
                      bgGradient="linear-gradient(to-br, cyan.600, #e879f9)"
                      filter="blur(32px) brightness(150%)"
                      p={8}
                    />
                  </AbsoluteCenter>
                  <Box
                    position="relative"
                    borderRadius="lg"
                    overflow="hidden"
                    filter="saturate(0.65)"
                    _hover={{
                      filter: 'saturate(1)',
                    }}
                    transition="200ms ease-in-out"
                    shadow="dark-lg"
                  >
                    <KLightbox
                      image={swellOrders}
                      alt="Swell e-commerce orders screen showing all recent orders, including paid, unpaid, refunded, and canceled orders. Also includes price paid, customer name, and fulfillment status."
                    />
                  </Box>
                </Box>
              </Stack>
            </SplitSection.LeftContent>
            <SplitSection.RightContent>
              <Stack spacing={8} px={{ base: 4, md: 8 }}>
                <Stack spacing={3}>
                  <Center
                    bgGradient="linear-gradient(to-br, cyan.600, cyan.400)"
                    w={12}
                    h={12}
                    rounded="lg"
                  >
                    <Icon
                      as={FaDollarSign}
                      color="whiteAlpha.900"
                      w={5}
                      h={5}
                    />
                  </Center>
                  <Heading
                    as="h5"
                    fontSize="xl"
                    fontWeight="semibold"
                    color="whiteAlpha.800"
                  >
                    Choose the right plan for you*
                  </Heading>
                  <Text color="whiteAlpha.600" letterSpacing="wide">
                    Get selling for 2.0% of sales or $299/mo. with a 0%
                    transaction fee up to $500k/yr., then 1.5%.
                  </Text>
                </Stack>
                <Stack spacing={3}>
                  <Center
                    bgGradient="linear-gradient(to-br, cyan.600, cyan.400)"
                    w={12}
                    h={12}
                    rounded="lg"
                  >
                    <Icon as={FaPlug} color="whiteAlpha.900" w={5} h={5} />
                  </Center>
                  <Heading
                    as="h5"
                    fontSize="xl"
                    fontWeight="semibold"
                    color="whiteAlpha.800"
                  >
                    40+ integrations
                  </Heading>
                  <Text color="whiteAlpha.600" letterSpacing="wide">
                    Including Square, Stripe, PayPal, HubSpot, Mailchimp,
                    ShipStation, and Zapier.
                  </Text>
                </Stack>
                <Stack spacing={3}>
                  <Center
                    bgGradient="linear-gradient(to-br, cyan.600, cyan.400)"
                    w={12}
                    h={12}
                    rounded="lg"
                  >
                    <Icon as={FaUsers} color="whiteAlpha.900" w={6} h={6} />
                  </Center>
                  <Heading
                    as="h5"
                    fontSize="xl"
                    fontWeight="semibold"
                    color="whiteAlpha.800"
                  >
                    Multiple user support
                  </Heading>
                  <Text color="whiteAlpha.600" letterSpacing="wide">
                    Have a larger business? Add up to three* admin users to your
                    store to stay on top of things.
                  </Text>
                </Stack>
                <Text fontSize="sm" fontStyle="italic" color="whiteAlpha.600">
                  *When using the Swell headless e-commerce platform.{' '}
                  <KLink
                    href="https://www.swell.is"
                    target="_blank"
                    rel="noopener"
                    fontWeight="semibold"
                  >
                    Click to learn more about Swell.
                  </KLink>
                </Text>
              </Stack>
            </SplitSection.RightContent>
          </SplitSection>
        </Stack>
      </Stack>
    </Container>
  );
};

export default EcommerceSection;
