import { groq } from 'next-sanity';

export const getTagsQuery = groq`*[_type == 'tag'] {_key, label}`;
