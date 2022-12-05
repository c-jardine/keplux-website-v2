import {
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import React from 'react';
import { CodeBlock } from '../CodeBlock';
import { CodeTabs } from '../CodeTabs';
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
    return <CodeBlock {...value} />;
  },
  codeTabGroup: ({ value }) => <CodeTabs {...value} />,
};

export const PortableTextComponents = {
  block,
  marks,
  ...list,
  types,
};
