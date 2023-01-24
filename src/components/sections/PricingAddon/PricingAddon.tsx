import {
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { PricingAddonProps } from './PricingAddon.types';

const PricingAddon = (props: PricingAddonProps) => {
  return (
    <Stack
      justifyContent="space-between"
      rounded="lg"
      borderWidth={1}
      borderColor="whiteAlpha.400"
      p={{ base: 4, md: 8 }}
      spacing={6}
    >
      <Stack spacing={4}>
        <Heading
          as="h3"
          fontSize="lg"
          textTransform="uppercase"
          color="whiteAlpha.800"
        >
          {props.heading}
        </Heading>
        <Flex gap={1} alignItems="flex-end">
          {props.price.abovePrice && (
            <Text color="whiteAlpha.600">{props.price.abovePrice}</Text>
          )}
          {props.price.price && (
            <Text
              fontSize="3xl"
              fontWeight="black"
              lineHeight={1}
              color="brand.600"
            >
              {props.price.price}
            </Text>
          )}
          {props.price.belowPrice && (
            <Text color="whiteAlpha.600">{props.price.belowPrice}</Text>
          )}
        </Flex>
        <Text color="whiteAlpha.600" fontSize="sm">
          {props.description}
        </Text>
      </Stack>
      <Button
        as={Link}
        href={props.cta.href}
        target={props.cta.href.startsWith('https://') && '_blank'}
        rel={props.cta.href.startsWith('https://') && 'noreferrer'}
        variant="secondary"
        justifyContent="space-between"
      >
        <Text>{props.cta.label}</Text>
        <Icon as={FaChevronRight} color="white" />
      </Button>
    </Stack>
  );
};

export default PricingAddon;
