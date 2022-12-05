import { TypedObject } from 'sanity';

export interface PortableTextProps {
  value: TypedObject | TypedObject[];
}

export interface CodeBlockProps {
  _type: string;
  filename: string;
  language: string;
  code: {
    code: string;
    language: string;
  };
}
