import { TypedObject } from 'sanity';

export interface CodeTabProps {
  _key: string;
  label: string;
  content: TypedObject | TypedObject[];
}

export interface CodeTabsProps {
  tabs: CodeTabProps[];
}
