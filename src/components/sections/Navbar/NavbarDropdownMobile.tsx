import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Stack,
  Text,
} from '@chakra-ui/react';
import { KLink } from '../../core';
import { NavbarItemProps } from './Navbar.types';

const NavbarDropdownMobileItem = (props: NavbarItemProps) => {
  return (
    <KLink
      key={props.label}
      href={props.href}
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
      onClick={props.onClick}
    >
      {props.label}
    </KLink>
  );
};

const NavbarDropdownMobile = (props: NavbarItemProps) => {
  return (
    <Accordion allowToggle borderWidth={0}>
      <AccordionItem borderWidth={'0 !important'}>
        <AccordionButton
          borderWidth={0}
          borderLeftWidth={4}
          borderColor="transparent"
          p={2}
          _hover={{ all: 'none' }}
        >
          <Text fontSize="sm" textTransform="uppercase">
            {props.label}
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel
          as={Stack}
          borderWidth={0}
          borderLeftWidth={2}
          borderColor="whiteAlpha.400"
          ml={2}
          py={1}
        >
          {props.items.map((subItem) => (
            <NavbarDropdownMobileItem
              key={subItem.label}
              {...subItem}
              onClick={props.onClick}
            />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default NavbarDropdownMobile;
