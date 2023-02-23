import { groq } from 'next-sanity';

export const allProjectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {...}
`;

export const projectBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {...}
`;
