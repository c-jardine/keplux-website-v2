import { Box, Divider, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CodeBlockProps } from './PortableText.types';

const block = {
  h1: ({ children }) => (
    <Heading as="h1" size="3xl" mb={4}>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading as="h2" size="2xl" mb={4}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h3" size="xl" mb={4}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading as="h4" size="lg" mb={4}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading as="h5" size="md" mb={4}>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading as="h6" size="sm" mb={4}>
      {children}
    </Heading>
  ),
};

const marks = {
  link: ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: { href: string };
  }) => (
    <Link
      href={value.href}
      target="_blank"
      rel="noreferrer"
      fontWeight="semibold"
    >
      {children}
    </Link>
  ),
};

const types = {
  code: ({ value }: { value: CodeBlockProps }) => (
    <Box bg="gray.100" rounded="xl" overflow="hidden">
      <Box p={4}>
        <SyntaxHighlighter
          language={value.language}
          customStyle={{ background: 'transparent', padding: 0 }}
        >
          {value.code}
        </SyntaxHighlighter>
      </Box>
      <Divider borderColor="gray.500" rounded="full" />
      <Box px={4} py={2} bg="gray.300">
        <Text
          textTransform="uppercase"
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="wider"
          color="gray.600"
        >
          {value.language}
        </Text>
      </Box>
    </Box>
  ),
};

export const PortableTextComponents = {
  block,
  marks,
  types,
};
