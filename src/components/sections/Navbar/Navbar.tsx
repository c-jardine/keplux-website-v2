import {
  Avatar,
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../../../public/keplux-logo-square-light.png';
import { useSignedInUser } from '../../../hooks';
import { KLink } from '../../core';
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
  const { data: session } = useSession();
  const router = useRouter();

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
        {session ? (
          <Menu>
            <Avatar as={MenuButton} src={session.user.image} p={1} />
            <MenuList
              color="whiteAlpha.600"
              bg="blackAlpha.700"
              borderColor="whiteAlpha.200"
            >
              <MenuItem
                onClick={() => void router.push('/blog/profile')}
                bg="transparent"
                _hover={{ bg: 'whiteAlpha.100' }}
              >
                Edit profile
              </MenuItem>
              <MenuItem
                onClick={() => void signOut()}
                bg="transparent"
                _hover={{ bg: 'whiteAlpha.100' }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            aria-label="Log in to your account."
            variant="primary"
            onClick={() => void signIn('auth0')}
          >
            Sign in
          </Button>
        )}
      </Flex>
    );
  };

  const NavbarMobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { user } = useSignedInUser();

    return (
      <>
        <IconButton
          aria-label="Open main navigation"
          as={isOpen ? MdClose : FaBars}
          p={3}
          onClick={isOpen ? onClose : onOpen}
          bg="transparent"
          color="whiteAlpha.800"
          _hover={{ bg: 'whiteAlpha.50' }}
          _active={{ bg: 'whiteAlpha.50' }}
        />
        {isOpen && (
          <Box
            position="absolute"
            zIndex={9}
            top={16}
            left={0}
            w="full"
            h="calc(100vh - 4rem)"
            bg="blackAlpha.800"
            backdropFilter="blur(8px)"
          />
        )}
        <Box
          position="absolute"
          zIndex={10}
          top={16}
          left={0}
          w="full"
          borderBottomWidth={isOpen ? 1 : 0}
          borderColor="whiteAlpha.400"
        >
          <Collapse in={isOpen} animateOpacity>
            <Stack bg="black" p={4}>
              {NavItems.map((item, index) => {
                return !item.items ? (
                  <NavbarItemMobile key={index} {...item} />
                ) : (
                  <NavbarDropdownMobile
                    key={index}
                    {...item}
                    onClick={onClose}
                  />
                );
              })}
              {session && (
                <Text color="whiteAlpha.600" fontSize='sm'>
                  Signed in as{' '}
                  <KLink href='/blog/profile' color="whiteAlpha.800" fontWeight="semibold">
                    {user?.name}
                  </KLink>
                </Text>
              )}
              <Button
                aria-label="Log in to your account."
                variant="primary"
                onClick={() =>
                  session ? void signOut() : void signIn('auth0')
                }
              >
                {session ? 'Sign out' : 'Sign in'}
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
      bg="blackAlpha.800"
      borderBottomWidth={1}
      borderColor="whiteAlpha.400"
      backdropFilter="blur(8px)"
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
