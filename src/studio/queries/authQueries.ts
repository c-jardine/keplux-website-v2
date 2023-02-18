import { groq } from 'next-sanity';

export const getUserByIdQuery = groq`
  *[_type == 'user' && _id == $id][0]
`;

export const getUserByProviderAccountIdQuery = groq`
  *[_type == 'account' && providerId == $providerId && providerAccountId == $providerAccountId] {
    accessToken,
    accessTokenExpires,
    providerId,
    providerType,
    providerAccountId,
    user->
  }[0]
`;

export const getUserByEmailQuery = groq`
  *[_type == 'user' && email == $email][0]
`;

export const getVerificationTokenQuery = groq`
  *[_type == 'verification-token' && identifier == $identifier && token == $token][0]
`;

export const getSessionAndUserQuery = groq`
  *[ _type == 'session' && sessionToken == $sessionToken][0] {
    ...,
    user->
  }
`;
