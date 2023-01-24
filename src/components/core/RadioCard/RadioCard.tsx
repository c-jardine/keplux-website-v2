import { Box, useRadio, UseRadioProps } from '@chakra-ui/react';

const RadioCard = (props: UseRadioProps & { children: string }) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        px={4}
        py={2}
        bg="black"
        fontSize="sm"
        color="whiteAlpha.600"
        rounded="lg"
        borderWidth={1}
        borderColor="whiteAlpha.400"
        cursor="pointer"
        _hover={{
          color: 'whiteAlpha.800',
          borderColor: 'whiteAlpha.800',
        }}
        transition="200ms ease-in-out"
        borderRadius="md"
        textTransform="capitalize"
        _checked={{
          bg: 'brand.600',
          color: 'whiteAlpha.800',
          borderColor: 'brand.600',
          _hover: {
            bg: 'brand.500',
            color: 'whiteAlpha.800',
            borderColor: 'brand.500',
          },
        }}
        _focus={{
          boxShadow: 'outline',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};
export default RadioCard;
