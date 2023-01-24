import { useRouter } from 'next/router';
import { KLink } from '../../core';
import { NavbarItemProps } from './Navbar.types';

const NavbarItemMobile = (props: NavbarItemProps) => {
  const router = useRouter();

  return (
    <KLink
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
      color={router.route === props.href ? 'whiteAlpha.800' : 'whiteAlpha.600'}
    >
      {props.label}
    </KLink>
  );
};

export default NavbarItemMobile;
