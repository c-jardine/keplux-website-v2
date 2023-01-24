import { Heading, Icon, Stack, Text } from '@chakra-ui/react';
import BasicCardProps from './BasicCard.types';

const BasicCard = (props: BasicCardProps) => {
  return (
    <Stack
      position="relative"
      bg="white"
      shadow="md"
      p={8}
      spacing={8}
      rounded="lg"
    >
      <Icon
        as={props.icon}
        alignSelf="center"
        w={10}
        h={10}
        color="brand.500"
      />
      <Stack>
        <Heading
          as="h2"
          fontSize="lg"
          textTransform="uppercase"
          textAlign="center"
        >
          {props.title}
        </Heading>
        <Text fontSize="sm" textAlign="center" color="blackAlpha.800">
          {props.body}
        </Text>
      </Stack>
    </Stack>
  );
};

export default BasicCard;
