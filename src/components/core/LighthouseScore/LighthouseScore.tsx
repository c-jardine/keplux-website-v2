import {
  Box,
  Center,
  chakra,
  CircularProgress,
  CircularProgressLabel,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { LighthouseScoreProps } from './LighthouseScore.types';

const LighthouseScore = (props: LighthouseScoreProps) => {
  const getColor = (value: number): string => {
    if (value < 50) return 'brand.200';
    else if (value >= 50 && value < 90) return 'brand.400';
    else return 'brand.600';
  };

  return (
    <Box position="relative">
      <Center>
        <chakra.span
          position="relative"
          bg="gray.50"
          px={4}
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {props.heading}
        </chakra.span>
      </Center>
      <Box mt={-3} h={16} borderWidth={1} borderColor="gray.300" rounded="lg" />
      <Center>
        <SimpleGrid
          columns={4}
          placeItems="center"
          mt={-9}
          bg="gray.50"
          w="fit-content"
        >
          <CircularProgress
            value={props.performance}
            color={getColor(props.performance)}
            size="72px"
          >
            <CircularProgressLabel fontSize="sm">
              {props.performance}%
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={props.accessibility}
            color={getColor(props.accessibility)}
            size="72px"
          >
            <CircularProgressLabel fontSize="sm">
              {props.accessibility}%
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={props.bestPractices}
            color={getColor(props.bestPractices)}
            size="72px"
          >
            <CircularProgressLabel fontSize="sm">
              {props.bestPractices}%
            </CircularProgressLabel>
          </CircularProgress>
          <CircularProgress
            value={props.seo}
            color={getColor(props.seo)}
            size="72px"
          >
            <CircularProgressLabel fontSize="sm">
              {props.seo}%
            </CircularProgressLabel>
          </CircularProgress>
          <Text fontSize="sm" textAlign="center">
            Performance
          </Text>
          <Text fontSize="sm" textAlign="center">
            Accessibility
          </Text>
          <Text fontSize="sm" textAlign="center">
            Best Practices
          </Text>
          <Text fontSize="sm" textAlign="center">
            SEO
          </Text>
        </SimpleGrid>
      </Center>
    </Box>
  );
};
export default LighthouseScore;
