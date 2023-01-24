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
  color: 'whiteAlpha.600',
  px: 6,
  _hover: {
    color: 'black',
  },
  _active: {
    bg: 'whiteAlpha.100',
  },
});

const primary = defineStyle({
  bg: 'brand.600',
  fontSize: 'sm',
  color: 'whiteAlpha.900',
  _hover: {
    bg: 'brand.500',
    color: 'white',
  },
});

const secondary = defineStyle({
  bg: 'black',
  borderWidth: 2,
  borderColor: 'whiteAlpha.300',
  _hover: {
    borderColor: 'whiteAlpha.800',
    color: 'whiteAlpha.800',
    textDecoration: 'none',
  },
  color: 'whiteAlpha.600',
  fontSize: 'sm',
  letterSpacing: 'wide',
  textTransform: 'none',
});

const subtle = defineStyle({
  fontSize: 'xs',
  color: 'whiteAlpha.800',
  borderWidth: 1,
  borderColor: 'whiteAlpha.400',
  h: 'fit-content',
  fontWeight: 'light',
  py: 2,
  transition: '200ms ease-in-out',
  _hover: {
    color: 'whiteAlpha.800',
    borderColor: 'whiteAlpha.800',
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
