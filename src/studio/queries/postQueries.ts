import { groq } from 'next-sanity';

export const allPostSlugsQuery = groq`
  *[_type == "post"] {slug}
`;

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedOn desc) {
    ...,
    "author": author->{...},
    "postSeries": postSeries->{...},
    "tags": tags[]->{...}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    "author": author->{...},
    "postSeries": postSeries->{...},
    "tags": tags[]->{...}
  }
`;
