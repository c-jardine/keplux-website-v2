import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Collapse,
  Container,
  Flex,
  IconButton,
  Link,
  Show,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import Image from 'next/image';
import logo from '../../../../public/keplux-logo-square-dark.png';
import { NavItems } from './Navbar.constants';
import NavbarDropdown from './NavbarDropdown';
import NavbarItem from './NavbarItem';
import React from 'react';

/**
 * The main navbar component.
 * TODO: Disable scrolling when mobile nav is open.
 */
const Navbar = () => {
  const NavbarDesktop = () => {
    return (
      <Flex h="full" gap={2}>
        {NavItems.map((item) => {
          return !item.items ? (
            <NavbarItem key={item.label} {...item} />
          ) : (
            <NavbarDropdown key={item.label} {...item} />
          );
        })}
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
                  <Link
                    key={item.label}
                    onClick={item.onClick}
                    href={!item.items ? item.href : '#'}
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
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Accordion allowToggle borderWidth={0}>
                    <AccordionItem borderWidth={'0 !important'}>
                      <AccordionButton
                        borderWidth={0}
                        p={2}
                        _hover={{ all: 'none' }}
                      >
                        <Text fontSize="sm" textTransform="uppercase">
                          {item.label}
                        </Text>
                      </AccordionButton>
                      <AccordionPanel
                        as={Stack}
                        borderWidth={0}
                        borderLeftWidth={2}
                        borderColor="gray.200"
                        ml={2}
                        py={1}
                      >
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            position="relative"
                            role="group"
                            justifyContent="center"
                            alignItems="center"
                            py={1}
                            h="full"
                            cursor="pointer"
                            _hover={{ textDecor: 'none' }}
                            fontSize="xs"
                            textTransform="uppercase"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
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
