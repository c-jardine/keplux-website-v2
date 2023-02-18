import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import Auth0Provider from 'next-auth/providers/auth0';

const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
};

export default NextAuth(authOptions);