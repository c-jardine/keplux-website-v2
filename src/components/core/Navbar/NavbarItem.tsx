import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { NavbarItemProps } from './Navbar.types';

const NavbarItem = (props: NavbarItemProps) => {
  return (
    <Flex
      key={props.label}
      ref={props.ref}
      onClick={props.onClick}
      as={!props.items ? Link : Flex}
      href={!props.items ? props.href : '#'}
      position="relative"
      role="group"
      justifyContent="center"
      alignItems="center"
      px={2}
      h="full"
      cursor="pointer"
      _hover={{ textDecor: 'none' }}
    >
      <Text fontSize="sm" textTransform="uppercase">
        {props.label}
      </Text>
      <Box
        position="absolute"
        bottom={0}
        h={1}
        w="full"
        bg="brand.500"
        transform="scaleY(0%)"
        _groupHover={{ transform: 'scaleY(100%)' }}
        transition="200ms ease-in-out"
      />
    </Flex>
  );
};

export default NavbarItem;
