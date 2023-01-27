import { groq } from 'next-sanity';

export const allSeriesSlugsQuery = groq`
  *[_type == "series"] {slug}
`;

export const allSeriesWithPostsQuery = groq`
  *[_type == "series"] {
    ...,
    "tags": tags[]->{...},
    "posts": *[_type == "post" && references(^._id)]
      | order(_createdAt asc) {
        title, slug
      }
  }
`;

export const seriesBySlugQuery = groq`
  *[_type == "series" && slug.current == $slug][0] {
    ...,
    "tags": tags[]->{...}
  }
`;
