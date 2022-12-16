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
        bg="gray.50"
        fontSize="sm"
        color="black"
        rounded="lg"
        borderWidth={1}
        borderColor="gray.200"
        cursor="pointer"
        _hover={{
          bg: 'gray.50',
          color: 'black',
          borderColor: 'brand.500',
        }}
        transition="200ms ease-in-out"
        borderRadius="md"
        textTransform="capitalize"
        _checked={{
          bg: 'brand.600',
          color: 'white',
          borderColor: 'brand.600',
          _hover: {
            bg: 'brand.500',
            color: 'white',
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
