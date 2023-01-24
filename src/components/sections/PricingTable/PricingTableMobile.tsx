import {
  Box,
  chakra,
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
} from '@chakra-ui/react';
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle';
import { FaInfoCircle } from '@react-icons/all-files/fa/FaInfoCircle';
import { PricingBundleType } from './constants';
import PricingFeatures from './constants/features';

const PricingTableMobile = (props: { bundle: PricingBundleType }) => {
  return (
    <>
      {PricingFeatures.map((feature) => (
        <SimpleGrid
          key={feature.id}
          templateColumns="1fr 1fr"
          maxW="4xl"
          w="full"
          mx="auto"
          placeItems="center"
          borderBottomWidth={1}
          borderColor="whiteAlpha.400"
        >
          <Flex
            py={5}
            justifySelf="flex-start"
            alignItems="center"
            gap={2}
            position="relative"
          >
            <chakra.span fontSize="sm" color="whiteAlpha.600">
              {feature.feature}
            </chakra.span>
            <Popover>
              <PopoverTrigger>
                <Icon
                  ml={1}
                  as={FaInfoCircle}
                  w={4}
                  h={4}
                  color="whiteAlpha.800"
                />
              </PopoverTrigger>
              <PopoverContent bg="black" borderColor="whiteAlpha.400">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader
                  fontWeight="semibold"
                  borderColor="whiteAlpha.400"
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
          {feature.included[props.bundle] ? (
            <Icon as={FaCheckCircle} color="brand.600" />
          ) : (
            <Box />
          )}
        </SimpleGrid>
      ))}
    </>
  );
};

export default PricingTableMobile;
