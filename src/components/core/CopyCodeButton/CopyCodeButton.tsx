import { Box, IconButton, Text, useToast } from '@chakra-ui/react';
import { FaCopy } from '@react-icons/all-files/fa/FaCopy';
import copy from 'copy-to-clipboard';

const CopyCodeButton = (props: { codeToCopy: string }) => {
  const toast = useToast();
  return (
    <IconButton
      aria-label="Copy code to clipboard"
      icon={<FaCopy />}
      size="xs"
      colorScheme="blackAlpha"
      onClick={() => {
        copy(props.codeToCopy);
        toast({
          position: 'bottom',
          duration: 2000,
          render: () => (
            <Box bg="green.400" py={4} rounded="md">
              <Text
                textAlign="center"
                textTransform="uppercase"
                color="white"
                fontWeight="bold"
              >
                Code copied
              </Text>
            </Box>
          ),
        });
      }}
    />
  );
};

export default CopyCodeButton;
