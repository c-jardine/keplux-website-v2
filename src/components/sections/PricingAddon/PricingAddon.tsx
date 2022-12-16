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
      borderColor="gray.300"
      p={{ base: 4, md: 8 }}
      spacing={6}
    >
      <Stack spacing={4}>
        <Heading as="h3" fontSize="lg" textTransform="uppercase">
          {props.heading}
        </Heading>
        <Flex gap={1} alignItems="flex-end">
          {props.price.abovePrice && (
            <Text color="gray.600">{props.price.abovePrice}</Text>
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
            <Text color="gray.600">{props.price.belowPrice}</Text>
          )}
        </Flex>
        <Text color="gray.600" fontSize="sm">
          {props.description}
        </Text>
      </Stack>
      <Button
        as={Link}
        href={props.cta.href}
        target={props.cta.href.startsWith('https://') && '_blank'}
        rel={props.cta.href.startsWith('https://') && 'noreferrer'}
        bg="black"
        borderWidth={2}
        borderColor="black"
        _hover={{
          bg: 'gray.50',
          color: 'black',
          textDecoration: 'none',
        }}
        color="white"
        fontSize="sm"
        letterSpacing="wide"
        justifyContent="space-between"
        textTransform="none"
      >
        <Text>{props.cta.label}</Text>
        <Icon as={FaChevronRight} />
      </Button>
    </Stack>
  );
};

export default PricingAddon;
