import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Auth0Provider from 'next-auth/providers/auth0';
import { createClient } from 'next-sanity';
import { getSignedInUserQuery } from '../../../src/studio/queries';
import { UserProps } from '../../../src/studio/types';

const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  callbacks: {
    /**
     * Create user in Sanity on sign in if the user doesn't already exist.
     */
    signIn: async ({ user, account, profile, email, credentials }) => {
      // Get the user from Sanity.
      const sanityUser: UserProps = await client.fetch(getSignedInUserQuery, {
        email: user.email,
      });

      if (!sanityUser) {
        try {
          await client.create({
            _type: 'user',
            name: user.name ?? 'New User',
            email: user.email,
          });
        } catch (e) {
          console.error('Error creating user', e);
        }
      }

      return true;
    },
  },
};

export default NextAuth(authOptions);
