import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { NavbarItemProps } from './Navbar.types';
import NavbarItemDesktop from './NavbarItemDesktop';

const NavbarDropdownDesktopItem = (props: NavbarItemProps) => {
  return (
    <LinkBox
      as="article"
      aria-label={`View ${props.label} solutions`}
      role="group"
      p={4}
      rounded="md"
      _hover={{ bg: 'brand.50' }}
      transition="200ms ease-in-out"
      onClick={props.onClick}
    >
      <Icon
        as={props.icon}
        w={10}
        h={10}
        bg="brand.500"
        color="white"
        p={2.5}
        rounded="md"
        mb={4}
      />
      <LinkOverlay href={props.href}>
        <Text textTransform="uppercase" fontWeight="semibold">
          {props.label}
        </Text>
      </LinkOverlay>
      <Text fontSize="xs">{props.description}</Text>
    </LinkBox>
  );
};

const NavbarDropdownDesktop = (props: NavbarItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavbarItemDesktop {...props} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay mt={16} />
        <DrawerContent mt={16} py={8} bg="gray.50">
          <DrawerCloseButton zIndex={1} />
          <DrawerBody maxW="7xl" w="full" mx="auto">
            <SimpleGrid columns={{ md: 2, lg: 3 }} gap={2}>
              {props.items.map((item) => (
                <NavbarDropdownDesktopItem
                  key={item.label}
                  {...item}
                  onClick={onClose}
                />
              ))}
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default NavbarDropdownDesktop;
