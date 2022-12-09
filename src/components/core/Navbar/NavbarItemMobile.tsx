import { Link } from '@chakra-ui/react';
import React from 'react';
import { NavbarItemProps } from './Navbar.types';
import { useRouter } from 'next/router';

const NavbarItemMobile = (props: NavbarItemProps) => {
  const router = useRouter();

  return (
    <Link
      key={props.label}
      onClick={props.onClick}
      href={!props.items ? props.href : '#'}
      position="relative"
      role="group"
      justifyContent="center"
      alignItems="center"
      p={2}
      h="full"
      cursor="pointer"
      _hover={{ textDecor: 'none' }}
      fontSize="sm"
      textTransform="uppercase"
      borderLeftWidth={4}
      borderColor={router.route === props.href ? 'brand.500' : 'transparent'}
    >
      {props.label}
    </Link>
  );
};

export default NavbarItemMobile;
