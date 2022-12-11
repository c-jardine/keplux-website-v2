import {
  Box,
  Button,
  Circle,
  Collapse,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image as ChakraImage,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaSignOutAlt } from '@react-icons/all-files/fa/FaSignOutAlt';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
  const AuthBlock = () => {
    const router = useRouter();
    const supabaseClient = useSupabaseClient();
    const user = useUser();

    const _handleSignOut = async () => {
      await supabaseClient.auth.signOut();
      await router.push('/');
    };

    return user ? (
      <Menu>
        <MenuButton>
          <Circle size={12} overflow="hidden">
            <ChakraImage
              src={
                user.user_metadata?.avatar_url ||
                'https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png'
              }
              alt="Avatar"
            />
          </Circle>
        </MenuButton>
        <MenuList>
          <MenuItem
            as={Link}
            href="/referral-program/dashboard"
            _hover={{ textDecoration: 'none' }}
          >
            Dashboard
          </MenuItem>
          <Divider />
          <MenuItem
            icon={<FaSignOutAlt />}
            as={Link}
            onClick={_handleSignOut}
            _hover={{ textDecoration: 'none' }}
          >
            Sign out
          </MenuItem>
        </MenuList>
      </Menu>
    ) : (
      <Button
        colorScheme="brand"
        px={8}
        as={Link}
        href="/referral-program/sign-in"
        _hover={{ textDecoration: 'none' }}
      >
        Referral Program
      </Button>
    );
  };
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
        <AuthBlock />
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
                  <NavbarDropdownMobile {...item} />
                );
              })}
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
        <Show above="lg">
          <NavbarDesktop />
        </Show>
        <Show below="lg">
          <NavbarMobile />
        </Show>
      </Container>
    </Box>
  );
};

export default Navbar;
