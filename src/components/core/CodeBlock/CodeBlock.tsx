import { Box, Code, Divider, Flex, Text } from '@chakra-ui/react';
import { CodeBlockProps } from '../PortableText';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CopyCodeButton } from '../CopyCodeButton';
import { lightfair } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

/**
 * Creates a card showing code with syntax highlighting. If a filename is
 * specified, it also creates a badge at the top of the component showing
 * the filename and a footer showing the programming language. If no filename
 * is specified, it doesn't render the badge or a footer. This is useful for
 * showing terminal commands.
 *
 * Additionally, an icon button is rendered to copy the code block's contents
 * to the user's clipboard.
 */
const CodeBlock = (props: CodeBlockProps) => {
  return (
    <Box bg="white" rounded="lg" borderWidth={1} borderColor="gray.200">
      <Flex
        position="relative"
        px={4}
        py={6}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        {props.filename && (
          <Code
            position="absolute"
            top={-3.5}
            left={8}
            px={2}
            py={1}
            bg="brand.100"
            borderWidth={1}
            borderColor="brand.200"
            fontSize="xs"
            color="gray.600"
            letterSpacing="wide"
          >
            {props.filename}
          </Code>
        )}
        <SyntaxHighlighter
          language={props.code?.language}
          style={lightfair}
          customStyle={{
            background: 'transparent',
            padding: 0,
            fontSize: '0.8rem',
          }}
        >
          {props.code?.code}
        </SyntaxHighlighter>
        <CopyCodeButton codeToCopy={props.code?.code} />
      </Flex>
      {props.filename && (
        <>
          <Divider borderColor="gray.200" rounded="full" />
          <Flex
            px={4}
            py={2}
            bg="gray.100"
            justifyContent="space-between"
            alignItems="center"
            roundedBottom="lg"
          >
            <Text
              textTransform="uppercase"
              fontSize="0.75rem"
              fontWeight="semibold"
              letterSpacing="wider"
              color="gray.600"
            >
              {props.language}
            </Text>
          </Flex>
        </>
      )}
    </Box>
  );
};
export default CodeBlock;
