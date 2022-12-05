import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { CodeBlockProps } from '../PortableText';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CopyCodeButton } from '../CopyCodeButton';
import { lightfair } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeBlock = (props: CodeBlockProps) => {
  return (
    <Box bg="gray.100" rounded="lg">
      <Flex
        position="relative"
        px={4}
        py={6}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        {props.filename && (
          <Box
            bg="gray.200"
            px={2}
            py={1}
            position="absolute"
            top={-3}
            left={8}
            rounded="md"
            w="fit-content"
            shadow="sm"
          >
            <Text fontSize="xs" color="gray.600" letterSpacing="wide">
              {props.filename}
            </Text>
          </Box>
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
          <Divider borderColor="gray.500" rounded="full" />
          <Flex
            px={4}
            py={2}
            bg="gray.300"
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
