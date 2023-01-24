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
        bg={state.isChecked ? 'brand.600' : 'black'}
        fontSize="sm"
        color={state.isChecked ? 'white' : 'whiteAlpha.600'}
        rounded="lg"
        borderWidth={1}
        borderColor={state.isChecked ? 'brand.600' : 'whiteAlpha.300'}
        cursor="pointer"
        _hover={{
          bg: state.isChecked ? 'brand.500' : 'black',
          color: 'whiteAlpha.800',
          borderColor: state.isChecked ? 'brand.500' : 'whiteAlpha.800',
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
