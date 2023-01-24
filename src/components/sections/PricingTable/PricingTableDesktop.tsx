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
import PlanPricing from './constants/planPricing';

const PricingTableDesktop = () => {
  return (
    <>
      {PricingFeatures.map((feature) => (
        <SimpleGrid
          key={feature.id}
          templateColumns="2fr 1fr 1fr 1fr 1fr"
          placeItems="center"
          borderBottomWidth={1}
          borderColor="gray.200"
          gap={2}
        >
          <Flex
            py={5}
            justifySelf="flex-start"
            alignItems="center"
            gap={2}
            position="relative"
          >
            <Text fontSize="sm">{feature.feature}</Text>
            <Popover>
              <PopoverTrigger>
                <Icon as={FaInfoCircle} w={3} h={3} color="brand.300" />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontWeight="semibold">
                  {feature.feature}
                </PopoverHeader>
                <PopoverBody fontSize="sm">{feature.description}</PopoverBody>
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
        borderColor="gray.200"
        gap={2}
      >
        <Flex
          py={5}
          justifySelf="flex-start"
          alignItems="center"
          gap={2}
          position="relative"
        >
          <Text fontSize="sm">Price</Text>
          <Popover>
            <PopoverTrigger>
              <Icon as={FaInfoCircle} w={3} h={3} color="brand.300" />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader fontWeight="semibold">Price</PopoverHeader>
              <PopoverBody fontSize="sm">
                Prices do not reflect customizations and addons.
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Text fontSize="sm" textAlign="center" py={5}>
          $0 down, $175 per month
        </Text>
        <Text fontSize="sm" textAlign="center" py={5}>
          Contact us
        </Text>
        <Text fontSize="sm" textAlign="center" py={5}>
          Contact us
        </Text>
        <Text fontSize="sm" textAlign="center" py={5}>
          Contact us
        </Text>
      </SimpleGrid>
    </>
  );
};

export default PricingTableDesktop;
