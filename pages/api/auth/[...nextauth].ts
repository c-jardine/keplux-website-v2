import NextAuth from 'next-auth';
import CognitoProvider from 'next-auth/providers/cognito';

export default NextAuth({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  providers: [
    CognitoProvider({
      clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET,
      issuer: process.env.NEXT_PUBLIC_COGNITO_ISSUER,
    }),
  ],
  pages: {
    signIn: '/referral-program/sign-in',
    verifyRequest: '/referral-program/confirm',
    newUser: '/referral-program/confirm',
  },
  debug: process.env.NODE_ENV === 'development' ? true : false,
});
