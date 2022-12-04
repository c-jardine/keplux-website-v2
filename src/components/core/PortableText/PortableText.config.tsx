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
  code: ({ value }: { value: CodeBlockProps }) => {
    return (
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
        <Flex
          px={4}
          py={2}
          bg="gray.300"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            textTransform="uppercase"
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wider"
            color="gray.600"
          >
            {value.language}
          </Text>
          <CopyCodeButton codeToCopy={value.code} />
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
