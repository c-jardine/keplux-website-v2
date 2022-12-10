import { createHmac } from 'crypto';

const NEXT_PUBLIC_COGNITO_CLIENT_SECRET =
  process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET;

const cognitoHasher = (email: string) => {
  const hasher = createHmac('sha256', NEXT_PUBLIC_COGNITO_CLIENT_SECRET);
  hasher.update(`${email}2o644pr7a04g1qbtj771d02bsl`);
  const secretHash = hasher.digest('base64');
  return secretHash;
};

export default cognitoHasher;
