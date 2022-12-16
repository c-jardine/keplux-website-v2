import {
  Box,
  CheckboxProps,
  Text,
  chakra,
  useCheckbox,
} from '@chakra-ui/react';

const ToggleButton = (props: CheckboxProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label {...htmlProps}>
      <input {...getInputProps()} hidden />
      <Box
        key={props.name}
        px={4}
        py={2}
        bg={state.isChecked ? 'brand.600' : 'gray.50'}
        fontSize="sm"
        color={state.isChecked ? 'white' : 'black'}
        rounded="lg"
        borderWidth={1}
        borderColor={state.isChecked ? 'brand.600' : 'gray.200'}
        cursor="pointer"
        _hover={{
          bg: state.isChecked ? 'brand.500' : 'gray.50',
          color: state.isChecked ? 'white' : 'black',
          borderColor: 'brand.500',
        }}
        transition="200ms ease-in-out"
        {...getCheckboxProps()}
      >
        <Text {...getLabelProps()}>{props.value}</Text>
      </Box>
    </chakra.label>
  );
};
export default ToggleButton;
