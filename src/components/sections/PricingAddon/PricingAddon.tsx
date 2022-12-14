import { Box, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { PricingAddonProps } from './PricingAddon.types';

const PricingAddon = (props: PricingAddonProps) => {
  return (
    <Stack bg="white" rounded="lg" shadow="lg" justifyContent="space-between">
      <Box p={{ base: 4, md: 8 }}>
        <Heading as="h3" fontSize="lg" textTransform="uppercase">
          {props.heading}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {props.description}
        </Text>
      </Box>
      <Stack
        bg="brand.50"
        justifyContent="space-between"
        alignItems="center"
        roundedRight="lg"
        spacing={0}
        px={{ base: 4, md: 8 }}
        py={{ base: 8, md: 12 }}
      >
        <Stack alignItems="center">
          {props.price?.abovePrice && (
            <Text textTransform="uppercase" color="gray.600">
              {props.price?.abovePrice}
            </Text>
          )}
          <Text fontWeight="black" fontSize="6xl" lineHeight={1}>
            {props.price?.price}
          </Text>
          {props.price?.belowPrice && (
            <Text
              textTransform="uppercase"
              fontWeight="semibold"
              color="gray.600"
            >
              {props.price?.belowPrice}
            </Text>
          )}
          {props.price?.primaryCta && (
            <HStack pt={8}>
              {props.price?.primaryCta}
              {props.price?.secondaryCta && props.price?.secondaryCta}
            </HStack>
          )}
        </Stack>
        {props.price?.disclaimer && (
          <Text pt={4} fontSize="xs" fontStyle="italic" color="blackAlpha.600">
            {props.price?.disclaimer}
          </Text>
        )}
      </Stack>
    </Stack>
  );
};

export default PricingAddon;
