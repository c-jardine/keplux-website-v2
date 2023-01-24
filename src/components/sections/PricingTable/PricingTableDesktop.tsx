import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle';
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle';
import PricingFeatures from './constants/features';

const PricingTableDesktop = () => {
  return (
    <>
      {PricingFeatures.map((feature) => (
        <SimpleGrid
          key={feature.id}
          templateColumns="2fr 1fr 1fr 1fr 1fr"
          placeItems="center"
          borderBottomWidth={1}
          borderColor="whiteAlpha.300"
          gap={2}
        >
          <Flex
            py={5}
            justifySelf="flex-start"
            alignItems="center"
            gap={2}
            position="relative"
          >
            <Text fontSize="sm" color="whiteAlpha.600">
              {feature.feature}
            </Text>
            <Popover>
              <PopoverTrigger>
                <Icon as={FaInfoCircle} w={4} h={4} color="whiteAlpha.800" />
              </PopoverTrigger>
              <PopoverContent bg="black" borderColor="whiteAlpha.300">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader
                  fontWeight="semibold"
                  borderColor="whiteAlpha.300"
                  color="whiteAlpha.800"
                >
                  {feature.feature}
                </PopoverHeader>
                <PopoverBody fontSize="sm" color="whiteAlpha.600">
                  {feature.description}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <Stack w="full" placeItems="center">
            {feature.included.starter ? (
              <Icon as={FaCheckCircle} color="brand.600" />
            ) : (
              <Box />
            )}
          </Stack>
          <Stack w="full" placeItems="center">
            {feature.included.professional ? (
              <Icon as={FaCheckCircle} color="brand.600" />
            ) : (
              <Box />
            )}
          </Stack>
          <Stack w="full" placeItems="center">
            {feature.included.ecommerce ? (
              <Icon as={FaCheckCircle} color="brand.600" />
            ) : (
              <Box />
            )}
          </Stack>
          <Stack w="full" placeItems="center">
            {feature.included.ultimate ? (
              <Icon as={FaCheckCircle} color="brand.600" />
            ) : (
              <Box />
            )}
          </Stack>
        </SimpleGrid>
      ))}
      <SimpleGrid
        templateColumns="2fr 1fr 1fr 1fr 1fr"
        maxW="7xl"
        w="full"
        mx="auto"
        placeItems="center"
        borderBottomWidth={1}
        borderColor="whiteAlpha.300"
        gap={2}
      >
        <Flex
          py={5}
          justifySelf="flex-start"
          alignItems="center"
          gap={2}
          position="relative"
        >
          <Text fontSize="sm" color="whiteAlpha.600">
            Price
          </Text>
          <Popover>
            <PopoverTrigger>
              <Icon as={FaInfoCircle} w={4} h={4} color="white" />
            </PopoverTrigger>
            <PopoverContent bg="black" borderColor="whiteAlpha.300">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader
                fontWeight="semibold"
                borderColor="whiteAlpha.300"
                color="whiteAlpha.800"
              >
                Price
              </PopoverHeader>
              <PopoverBody fontSize="sm" color="whiteAlpha.600">
                Prices do not reflect customizations and addons.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Text fontSize="sm" textAlign="center" py={5} color="whiteAlpha.600">
          $0 down, $175 per month
        </Text>
        <Text fontSize="sm" textAlign="center" py={5} color="whiteAlpha.600">
          Contact us
        </Text>
        <Text fontSize="sm" textAlign="center" py={5} color="whiteAlpha.600">
          Contact us
        </Text>
        <Text fontSize="sm" textAlign="center" py={5} color="whiteAlpha.600">
          Contact us
        </Text>
      </SimpleGrid>
    </>
  );
};

export default PricingTableDesktop;
