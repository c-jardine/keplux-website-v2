import { AbsoluteCenter, Box, Flex, Icon } from '@chakra-ui/react';
import { IconType } from '@react-icons/all-files';

const IconHeader = (props: { icon: IconType }) => {
  return (
    <Flex position="relative" w="fit-content">
      <AbsoluteCenter>
        <Box
          bg="orange.200"
          w={12}
          h={12}
          rounded="lg"
          transform="rotate(20deg)"
        />
      </AbsoluteCenter>
      <AbsoluteCenter>
        <Box
          bg="brand.500"
          w={12}
          h={12}
          rounded="lg"
          transform="rotate(70deg)"
        />
      </AbsoluteCenter>
      <Icon as={props.icon} position="relative" w={6} h={6} color="gray.50" />
    </Flex>
  );
};

export default IconHeader;
