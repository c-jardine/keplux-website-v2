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

const Button = defineStyleConfig({
  baseStyle: {
    textTransform: 'uppercase',
    _hover: {
      textDecoration: 'none',
    },
  },
  variants: { primaryLink, secondaryLink },
});

export default Button;
