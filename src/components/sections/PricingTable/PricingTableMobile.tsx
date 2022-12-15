import {
  Box,
  chakra,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
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
          borderColor="gray.100"
        >
          <Text position="relative" justifySelf="flex-start" py={5}>
            <chakra.span fontSize="sm">{feature.feature}</chakra.span>
            <Popover>
              <PopoverTrigger>
                <Icon ml={1} as={FaInfoCircle} w={3} h={3} color="brand.300" />
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
          </Text>
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
