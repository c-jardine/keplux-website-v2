import { IconButton, useToast } from '@chakra-ui/react';
import { FaCopy } from '@react-icons/all-files/fa/FaCopy';
import copy from 'copy-to-clipboard';
import { createToast } from '../../../utils';

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
      colorScheme="brand"
      onClick={() => {
        copy(props.codeToCopy);
        createToast(toast, { text: 'Code copied', status: 'info' })
      }}
    />
  );
};

export default CopyCodeButton;
