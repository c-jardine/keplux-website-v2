import { Box, IconButton, Text, useToast } from '@chakra-ui/react';
import { FaCopy } from '@react-icons/all-files/fa/FaCopy';
import copy from 'copy-to-clipboard';

/**
 * An icon button that copies the parameter's contents to the user's clipboard.
 * When the button is clicked, the copier function runs and calls a toast
 * component notifying the user that something was copied to their clipboard.
 * @param codeToCopy - The code to be copied to the clipboard.
 * @see {@link CopyCodeInline}
 */
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
