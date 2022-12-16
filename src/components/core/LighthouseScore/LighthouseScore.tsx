import {
  AbsoluteCenter,
  Box,
  Center,
  chakra,
  Circle,
  HStack,
  Show,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { LighthouseScoreProps } from './LighthouseScore.types';

const MobileLighthouseScore = (props: LighthouseScoreProps) => {
  return (
    <SimpleGrid columns={2} maxW="sm" w="full" mx="auto" px={4}>
      <Stack
        py={8}
        alignItems="center"
        px={4}
        borderRightWidth={1}
        borderBottomWidth={1}
      >
        <Text fontWeight="black" fontSize="xl" lineHeight={1}>
          {props.performance}%
        </Text>
        <Text
          color="gray.500"
          fontWeight="semibold"
          textTransform="uppercase"
          fontSize="xs"
        >
          Performance
        </Text>
      </Stack>
      <Stack py={8} alignItems="center" px={4} borderBottomWidth={1}>
        <Text fontWeight="black" fontSize="xl" lineHeight={1}>
          {props.accessibility}%
        </Text>
        <Text
          color="gray.500"
          fontWeight="semibold"
          textTransform="uppercase"
          fontSize="xs"
        >
          Accessibility
        </Text>
      </Stack>
      <Stack py={8} alignItems="center" borderRightWidth={1}>
        <Text fontWeight="black" fontSize="xl" lineHeight={1}>
          {props.bestPractices}%
        </Text>
        <Text
          color="gray.500"
          fontWeight="semibold"
          textTransform="uppercase"
          fontSize="xs"
        >
          Best Practices
        </Text>
      </Stack>
      <Stack py={8} alignItems="center">
        <Text fontWeight="black" fontSize="xl" lineHeight={1}>
          {props.seo}%
        </Text>
        <Text
          color="gray.500"
          fontWeight="semibold"
          textTransform="uppercase"
          fontSize="xs"
        >
          SEO
        </Text>
      </Stack>
    </SimpleGrid>
  );
};

const DesktopLighthouseScore = (props: LighthouseScoreProps) => {
  return (
    <HStack justifyContent="center" divider={<StackDivider />}>
      <Stack alignItems="center" px={{ base: 2, xl: 4 }}>
        <Text fontWeight="black" fontSize="xl" lineHeight={1}>
          {props.performance}%
        </Text>
        <Text
          color="gray.500"
          fontWeight="semibold"
          textTransform="uppercase"
          fontSize="xs"
        >
          Performance
        </Text>
      </Stack>
      <Stack alignItems="center" px={{ base: 2, xl: 4 }}>
        <Text fontWeight="black" fontSize="xl" lineHeight={1}>
          {props.accessibility}%
        </Text>
        <Text
          color="gray.500"
          fontWeight="semibold"
          textTransform="uppercase"
          fontSize="xs"
        >
          Accessibility
        </Text>
      </Stack>
      <Stack alignItems="center" px={{ base: 2, xl: 4 }}>
        <Text fontWeight="black" fontSize="xl" lineHeight={1}>
          {props.bestPractices}%
        </Text>
        <Text
          color="gray.500"
          fontWeight="semibold"
          textTransform="uppercase"
          fontSize="xs"
        >
          Best Practices
        </Text>
      </Stack>
      <Stack alignItems="center" px={{ base: 2, xl: 4 }}>
        <Text fontWeight="black" fontSize="xl" lineHeight={1}>
          {props.seo}%
        </Text>
        <Text
          color="gray.500"
          fontWeight="semibold"
          textTransform="uppercase"
          fontSize="xs"
        >
          SEO
        </Text>
      </Stack>
    </HStack>
  );
};

const LighthouseScore = (props: LighthouseScoreProps) => {
  // const getColor = (value: number): string => {
  //   if (value < 50) return 'red.500';
  //   else if (value >= 50 && value < 90) return 'yellow.400';
  //   else return 'green.600';
  // };

  return (
    <Box position="relative">
      <AbsoluteCenter w="full" h="50%" zIndex={0}>
        <Circle
          bgGradient="linear-gradient(to-br, brand.600, orange.400)"
          filter="blur(32px) brightness(150%)"
          p={8}
        />
      </AbsoluteCenter>
      <Center position="relative" zIndex={1}>
        <chakra.span
          position="relative"
          bg="gray.50"
          px={4}
          py={2}
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wide"
          rounded="md"
          borderWidth={1}
          borderColor="gray.300"
        >
          {props.heading}
        </chakra.span>
      </Center>
      <Box
        position="relative"
        bg="gray.50"
        mt="-22px"
        pt={9}
        pb={4}
        borderWidth={1}
        borderColor="gray.300"
        rounded="lg"
      >
        <Show below="lg">
          <MobileLighthouseScore {...props} />
        </Show>
        <Show above="lg">
          <DesktopLighthouseScore {...props} />
        </Show>
      </Box>
    </Box>
  );
};
export default LighthouseScore;
