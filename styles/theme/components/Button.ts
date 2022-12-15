import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primaryLink = defineStyle({
  bg: 'brand.600',
  fontWeight: 'bold',
  color: 'white',
  px: 6,
  _hover: {
    bg: 'brand.500',
  },
  _active: {
    bg: 'brand.700',
  },
});

const secondaryLink = defineStyle({
  bg: 'white',
  fontWeight: 'normal',
  color: 'gray.600',
  px: 6,
  _hover: {
    color: 'black',
  },
  _active: {
    bg: 'gray.100',
  },
});

const primary = defineStyle({
  bg: 'brand.600',
  fontSize: 'sm',
  color: 'white',
  _hover: {
    bg: 'brand.500',
  },
});

const secondary = defineStyle({
  bg: 'black',
  borderWidth: 2,
  borderColor: 'black',
  _hover: {
    bg: 'gray.50',
    color: 'black',
    textDecoration: 'none',
  },
  color: 'white',
  fontSize: 'sm',
});

const subtle = defineStyle({
  fontSize: 'xs',
  color: 'gray.600',
  borderWidth: 1,
  borderColor: 'gray.400',
  h: 'fit-content',
  fontWeight: 'light',
  py: 2,
  transition: '200ms ease-in-out',
  _hover: {
    color: 'black',
    borderColor: 'black',
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    letterSpacing: 'wide',
    _hover: {
      textDecoration: 'none',
    },
  },
  variants: { primaryLink, secondaryLink, primary, secondary, subtle },
});

export default Button;
