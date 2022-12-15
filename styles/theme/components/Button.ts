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

const Button = defineStyleConfig({
  baseStyle: {
    letterSpacing: 'wide',
    _hover: {
      textDecoration: 'none',
    },
  },
  variants: { primaryLink, secondaryLink, primary, secondary },
});

export default Button;
