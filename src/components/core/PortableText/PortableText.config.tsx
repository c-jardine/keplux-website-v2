import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { CopyCodeButton } from '../CopyCodeButton';
import { CopyCodeInline } from '../CopyCodeInline';
import { CodeBlockProps } from './PortableText.types';

const block = {
  h1: ({ children }) => (
    <Heading as="h1" size="3xl" pt={8}>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading as="h2" size="2xl" pt={8}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading as="h3" size="xl" pt={8}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading as="h4" size="lg" pt={8}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading as="h5" size="md" pt={8}>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading as="h6" size="sm" pt={8}>
      {children}
    </Heading>
  ),
};

const marks = {
  code: ({ children }) => {
    return <CopyCodeInline codeToCopy={children as string} />;
  },
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

const list = {
  list: {
    bullet: ({ children }) => <List spacing={3}>{children}</List>,
  },
  listItem: {
    bullet: ({ children }) => (
      <ListItem display="flex" alignItems="center">
        <ListIcon as={FaChevronRight} color="black" w={3} h={3} />
        <Text>{children}</Text>
      </ListItem>
    ),
  },
};

const types = {
  codeBlock: ({ value }: { value: CodeBlockProps }) => {
    return (
      <Box bg="gray.100" rounded="lg">
        <Box position="relative" px={4} py={6}>
          {value.filename && (
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
                {value.filename}
              </Text>
            </Box>
          )}
          <SyntaxHighlighter
            language={value.code.language}
            customStyle={{
              background: 'transparent',
              padding: 0,
              fontSize: '0.8rem',
            }}
          >
            {value.code.code}
          </SyntaxHighlighter>
        </Box>
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
            {value.language}
          </Text>
          <CopyCodeButton codeToCopy={value.code.code} />
        </Flex>
      </Box>
    );
  },
};

export const PortableTextComponents = {
  block,
  marks,
  ...list,
  types,
};
