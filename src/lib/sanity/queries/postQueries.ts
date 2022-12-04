import { groq } from 'next-sanity';

export const allPostsQuery = groq`
  *[_type == "post"] {
    ...,
    "author": author->{...},
    "postSeries": postSeries->{...}
  }
`;
