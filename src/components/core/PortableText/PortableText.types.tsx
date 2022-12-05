import { TypedObject } from 'sanity';

export interface PortableTextProps {
  value: TypedObject | TypedObject[];
}

export interface CodeBlockProps {
  filename: string;
  language: string;
  code: {
    code: string;
    language: string;
  };
}
