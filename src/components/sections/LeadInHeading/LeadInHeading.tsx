import { Box, Circle, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { LeadInHeadingProps } from './LeadInHeading.types';

const LeadInHeading = (props: LeadInHeadingProps) => {
  const gradient = `linear-gradient(to-r, ${props.color[0]}, ${props.color[1]})`;
  return (
    <>
      <Text textTransform="uppercase" fontSize="sm" fontWeight="semibold">
        {props.smallText}
      </Text>
      <Stack spacing={0} alignItems="center">
        <Box position="relative" h={32} w="1px" bg={props.color[1]}>
          <Box
            h={32}
            w="1px"
            bgGradient="linear-gradient(to-b, gray.50, transparent)"
          />
        </Box>
        <Circle bgGradient={gradient} size={12}>
          <Icon as={props.icon} color="white" />
        </Circle>
      </Stack>
      <Heading
        as="h3"
        fontWeight="bold"
        fontSize="3xl"
        bgGradient={gradient}
        bgClip="text"
        textAlign="center"
      >
        {props.heading}
      </Heading>
    </>
  );
};

export default LeadInHeading;
