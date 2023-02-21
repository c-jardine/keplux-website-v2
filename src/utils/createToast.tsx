import { Box, CreateToastFnReturn, Text } from '@chakra-ui/react';

interface ToastProps {
  text: string;
  status: 'success' | 'error' | 'info';
}

const createToast = (toast: CreateToastFnReturn, props: ToastProps) => {
  const color = () => {
    switch (props.status) {
      case 'success':
        return 'green.600';
      case 'error':
        return 'red.600';
      case 'info':
        return 'blue.600'
    }
  }

  toast({
    position: 'bottom',
    duration: 2000,
    render: () => (
      <Box bg={color()} py={4} rounded="md">
        <Text
          textAlign="center"
          textTransform="uppercase"
          color="white"
          fontWeight="bold"
        >
          {props.text}
        </Text>
      </Box>
    ),
  });
};

export default createToast;
