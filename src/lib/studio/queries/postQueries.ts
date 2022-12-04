import { groq } from 'next-sanity';

export const allPostSlugsQuery = groq`
  *[_type == "post"] {slug}
`;

export const allPostsQuery = groq`
  *[_type == "post"] {
    ...,
    "author": author->{...},
    "postSeries": postSeries->{...}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    "author": author->{...},
    "postSeries": postSeries->{...}
  }
`;
