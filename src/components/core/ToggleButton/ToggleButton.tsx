import { Box, Text } from '@chakra-ui/react';
import { ContactFormProps } from '../../../../pages/contact';

const ToggleButton = (props: {
  name: string;
  label: string;
  formData: ContactFormProps;
  setFormData: (name: string) => void;
}) => {
  // Check if form contains the specified option
  const _isSelected = (name: string) =>
    props.formData.interestedIn.includes(name);

  return (
    <Box
      key={props.name}
      px={4}
      py={2}
      bg={_isSelected(props.name) ? 'brand.600' : 'gray.50'}
      fontSize="sm"
      color={_isSelected(props.name) ? 'white' : 'black'}
      rounded="lg"
      borderWidth={1}
      borderColor={_isSelected(props.name) ? 'brand.600' : 'gray.200'}
      cursor="pointer"
      _hover={{
        bg: _isSelected(props.name) ? 'brand.500' : 'gray.50',
        color: _isSelected(props.name) ? 'white' : 'black',
        borderColor: 'brand.500',
      }}
      onClick={() => props.setFormData(props.name)}
      transition="200ms ease-in-out"
    >
      <Text>{props.label}</Text>
    </Box>
  );
};
export default ToggleButton;
