import { Code, Tooltip } from '@chakra-ui/react';
import copy from 'copy-to-clipboard';
import React from 'react';

/**
 * An inline text component that copies the parameter's contents to the user's
 * clipboard. When the text is clicked, the copier function runs and calls a
 * toast component notifying the user that something was copied to their
 * clipboard.
 * @param codeToCopy - The code to be copied to the clipboard.
 * @see {@link CopyCodeButton}
 */
const CopyCodeInline = (props: { codeToCopy: string }) => {
  const DEFAULT_TOOLTIP_TEXT = 'Click to copy';
  const CLICKED_TOOLTIP_TEXT = 'Copied!';
  const [tooltipText, setTooltipText] =
    React.useState<string>(DEFAULT_TOOLTIP_TEXT);

  const _handleClick = () => {
    copy(props.codeToCopy);
    setTooltipText(CLICKED_TOOLTIP_TEXT);
    setTimeout(() => setTooltipText(DEFAULT_TOOLTIP_TEXT), 1000);
  };

  return (
    <Tooltip label={tooltipText} closeOnClick={false}>
      <Code
        px={1}
        rounded="md"
        cursor="pointer"
        onClick={_handleClick}
        _hover={{ bg: 'purple.200' }}
        transition="200ms ease-in-out"
      >
        {props.codeToCopy}
      </Code>
    </Tooltip>
  );
};

export default CopyCodeInline;
