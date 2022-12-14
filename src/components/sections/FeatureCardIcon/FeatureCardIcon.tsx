import { Heading, Stack, Text } from '@chakra-ui/react';
import { IconType } from '@react-icons/all-files';
import { IconHeader } from '../../core';

const FeatureCardIcon = (props: {
  icon: IconType;
  heading: string;
  description: string;
}) => {
  return (
    <Stack
      alignItems="center"
      maxW="xs"
      w="full"
      p={8}
      rounded="lg"
      bg="white"
      shadow="md"
    >
      <IconHeader icon={props.icon} />
      <Heading
        as="h3"
        pt={8}
        fontSize="md"
        textAlign="center"
        textTransform="uppercase"
      >
        {props.heading}
      </Heading>
      <Text textAlign="center" fontSize="sm" color="gray.700">
        {props.description}
      </Text>
    </Stack>
  );
};

export default FeatureCardIcon;
