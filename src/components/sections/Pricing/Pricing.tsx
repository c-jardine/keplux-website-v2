import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import { PricingFeatureProps, PricingProps } from './Pricing.types';

const Pricing = (props: PricingProps) => {
  return (
    <Container position="relative" maxW="7xl" w="full">
      <SimpleGrid
        columns={{ base: 1, xl: 4 }}
        bg="white"
        rounded="lg"
        shadow="lg"
      >
        <Stack gridColumn={{ xl: '1 / span 3' }} spacing={0}>
          <Box p={{ base: 4, md: 12 }}>
            <Heading as="h2">{props.heading}</Heading>
            {props.description instanceof String ? (
              <Text>{props.description}</Text>
            ) : (
              <>{props.description}</>
            )}
          </Box>
          <Flex w="full" alignItems="center" gap={4} pl={{ base: 4, md: 12 }}>
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
            p={{ base: 4, md: 12 }}
          >
            {props.features.map((item: PricingFeatureProps) => (
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
          justifyContent="space-between"
          alignItems="center"
          roundedRight="lg"
          spacing={0}
          px={{ base: 4, md: 8 }}
          py={{ base: 8, md: 12 }}
        >
          <Stack alignItems="center">
            {props.price.abovePrice && (
              <Text textTransform="uppercase" color="gray.600">
                {props.price.abovePrice}
              </Text>
            )}
            <Text fontWeight="black" fontSize="6xl" lineHeight={1}>
              {props.price.price}
            </Text>
            {props.price.belowPrice && (
              <Text
                textTransform="uppercase"
                fontWeight="semibold"
                color="gray.600"
              >
                {props.price.belowPrice}
              </Text>
            )}
            <HStack pt={8}>
              {props.price.primaryCta}
              {props.price.secondaryCta && props.price.secondaryCta}
            </HStack>
          </Stack>
          {props.price.disclaimer && (
            <Text
              pt={4}
              fontSize="xs"
              fontStyle="italic"
              color="blackAlpha.600"
            >
              {props.price.disclaimer}
            </Text>
          )}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Pricing;
