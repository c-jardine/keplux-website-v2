import {
  Code,
  Heading,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import React from 'react';
import { CodeBlock } from '../CodeBlock';
import { CodeTabs } from '../CodeTabs';
import { CopyCodeInline } from '../CopyCodeInline';
import { KLink } from '../KLink';
import { CodeBlockProps } from './PortableText.types';

const block = {
  h1: ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: { _key: string };
  }) => (
    <Heading id={value._key} as="h1" size="3xl" pt={8}>
      {children}
    </Heading>
  ),
  h2: ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: { _key: string };
  }) => (
    <Heading id={value._key} as="h2" size="2xl" pt={8}>
      {children}
    </Heading>
  ),
  h3: ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: { _key: string };
  }) => (
    <Heading id={value._key} as="h3" size="xl" pt={8}>
      {children}
    </Heading>
  ),
  h4: ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: { _key: string };
  }) => (
    <Heading id={value._key} as="h4" size="lg" pt={8}>
      {children}
    </Heading>
  ),
  h5: ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: { _key: string };
  }) => (
    <Heading id={value._key} as="h5" size="md" pt={8}>
      {children}
    </Heading>
  ),
  h6: ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: { _key: string };
  }) => (
    <Heading id={value._key} as="h6" size="sm" pt={8}>
      {children}
    </Heading>
  ),
};

const marks = {
  code: ({ children }: { children: string }) => {
    return children[0].startsWith('npm') || children[0].startsWith('npx') ? (
      <CopyCodeInline codeToCopy={children} />
    ) : (
      <Code>{children}</Code>
    );
  },
  link: ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: { href: string };
  }) => (
    <KLink
      href={value.href}
      target="_blank"
      rel="noopener"
      fontWeight="semibold"
    >
      {children}
    </KLink>
  ),
};

const list = {
  list: {
    bullet: ({ children }) => (
      <List spacing={2} pl={10}>
        {children}
      </List>
    ),
    number: ({ children }) => (
      <OrderedList spacing={2} pl={10}>
        {children}
      </OrderedList>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <ListItem display="flex" alignItems="center">
        <ListIcon as={FaChevronRight} color="black" w={3} h={3} />
        <Text>{children}</Text>
      </ListItem>
    ),
    number: ({ children }) => <ListItem>{children}</ListItem>,
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
