import { groq } from 'next-sanity';

export const getSignedInUserQuery = groq`
  *[_type == 'user' && email == $email][0]
`;
