import React from 'react';
import { useToast, chakra, Box, Text } from '@chakra-ui/react';
import copy from 'copy-to-clipboard';

/**
 * An inline text component that copies the parameter's contents to the user's
 * clipboard. When the text is clicked, the copier function runs and calls a
 * toast component notifying the user that something was copied to their
 * clipboard.
 * @param codeToCopy - The code to be copied to the clipboard.
 * @see {@link CopyCodeButton}
 */
const CopyCodeInline = (props: { codeToCopy: string }) => {
  const toast = useToast();

  return (
    <chakra.span
      fontFamily="monospace"
      bg="gray.200"
      px={1}
      py={0.5}
      rounded="md"
      cursor="pointer"
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
      _hover={{ bg: 'purple.200' }}
      transition="200ms ease-in-out"
    >
      {props.codeToCopy}
    </chakra.span>
  );
};

export default CopyCodeInline;
