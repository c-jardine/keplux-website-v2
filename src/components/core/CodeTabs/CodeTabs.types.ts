import { CodeBlockProps } from '../PortableText';

export interface CodeTabProps {
  _key: string;
  _type: 'codeTab';
  label: string;
  content: CodeBlockProps;
}

export interface CodeTabsProps {
  tabs: CodeTabProps[];
}
