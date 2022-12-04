import { TypedObject } from 'sanity';

export interface PortableTextProps {
  value: TypedObject | TypedObject[];
}

export interface CodeBlockProps {
  language: string;
  code: string;
}
