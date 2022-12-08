import { Box, Container, Flex, Link } from '@chakra-ui/react';
import Image from 'next/image';
import logo from '../../../../public/keplux-logo-square-dark.png';
import { NavItems } from './Navbar.constants';
import NavbarDropdown from './NavbarDropdown';
import NavbarItem from './NavbarItem';

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
          {NavItems.map((item) => {
            return !item.items ? (
              <NavbarItem key={item.label} {...item} />
            ) : (
              <NavbarDropdown key={item.label} {...item} />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
