import SyntaxHighlighter from 'react-syntax-highlighter';
import { CodeBlockProps } from './PortableText.types';

const types = {
  code: ({ value }: { value: CodeBlockProps }) => (
    <SyntaxHighlighter language={value.language}>
      {value.code}
    </SyntaxHighlighter>
  ),
};

export const PortableTextComponents = {
  types,
};
