import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Show,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import Image from 'next/image';
import logo from '../../../../public/keplux-logo-square-dark.png';
import { NavItems } from './Navbar.constants';
import NavbarDropdownDesktop from './NavbarDropdownDesktop';
import NavbarDropdownMobile from './NavbarDropdownMobile';
import NavbarItemDesktop from './NavbarItemDesktop';
import NavbarItemMobile from './NavbarItemMobile';

/**
 * The main navbar component.
 * TODO: Disable scrolling when mobile nav is open.
 */
const Navbar = () => {
  const NavbarDesktop = () => {
    return (
      <Flex
        w="full"
        h="full"
        gap={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack w="full">
          {NavItems.map((item) => {
            return !item.items ? (
              <NavbarItemDesktop key={item.label} {...item} />
            ) : (
              <NavbarDropdownDesktop key={item.label} {...item} />
            );
          })}
        </HStack>
        <Button
          aria-label="Log in to your customer account."
          as={Link}
          href="https://billing.stripe.com/p/login/6oE3fq2dj2zSeekcMM"
          target="_blank"
          rel="external"
          variant="primaryLink"
        >
          Customer Login
        </Button>
      </Flex>
    );
  };

  const NavbarMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <IconButton
          aria-label="Open main navigation"
          as={isOpen ? MdClose : FaBars}
          p={3}
          onClick={isOpen ? onClose : onOpen}
          bg="transparent"
        />
        {isOpen && (
          <Box
            position="absolute"
            zIndex={9}
            top={16}
            left={0}
            w="full"
            h="calc(100vh - 4rem)"
            bg="blackAlpha.700"
          />
        )}
        <Box position="absolute" zIndex={10} top={16} left={0} w="full">
          <Collapse in={isOpen} animateOpacity>
            <Stack bg="white" p={4}>
              {NavItems.map((item) => {
                return !item.items ? (
                  <NavbarItemMobile {...item} />
                ) : (
                  <NavbarDropdownMobile {...item} onClick={onClose} />
                );
              })}
              <Button
                aria-label="Log in to your customer account."
                as={Link}
                href="https://billing.stripe.com/p/login/6oE3fq2dj2zSeekcMM"
                target="_blank"
                rel="external"
                colorScheme="brand"
              >
                Customer Login
              </Button>
            </Stack>
          </Collapse>
        </Box>
      </>
    );
  };

  return (
    <Box
      position="fixed"
      zIndex={100}
      top={0}
      left={0}
      bg="white"
      h={16}
      w="full"
      shadow="sm"
    >
      <Container
        as={Flex}
        alignItems="center"
        justifyContent={{ base: 'space-between', lg: 'flex-start' }}
        gap={4}
        py={2}
        maxW="8xl"
        w="full"
        h="full"
      >
        <Box as={Link} href="/" position="relative" w={8} h={8}>
          <Image
            style={{ objectFit: 'contain' }}
            alt="Keplux Development logo."
            src={logo}
            fill
          />
        </Box>
        <Show above="md">
          <NavbarDesktop />
        </Show>
        <Show below="md">
          <NavbarMobile />
        </Show>
      </Container>
    </Box>
  );
};

export default Navbar;
