import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../../../../public/keplux-logo-square-dark.png';
import { NavItems } from './Navbar.constant';
import { NavbarItemProps } from './Navbar.types';

const NavbarItem = (props: NavbarItemProps) => {
  return (
    <Flex
      key={props.label}
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

const Navbar = () => {
  return (
    <Box bg="white" h={16} w="full" shadow="sm">
      <Container
        as={Flex}
        alignItems="center"
        py={2}
        maxW="8xl"
        w="full"
        h="full"
      >
        <Box as={Link} href="/" position="relative" w={12} h={12}>
          <Image
            style={{ objectFit: 'contain' }}
            alt="Keplux Development logo."
            src={logo}
            fill
          />
        </Box>
        <Flex h="full" gap={2}>
          {NavItems.map((item) => (
            <NavbarItem key={item.label} {...item} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
