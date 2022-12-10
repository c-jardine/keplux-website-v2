import {
  CognitoIdentityProviderClient,
  SignUpCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { AWS_CONFIG } from './config';
import cognitoHasher from './hasher';

const NEXT_PUBLIC_COGNITO_CLIENT_ID = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;

const signUp = async (email: string, password: string) => {
  try {
    const client = new CognitoIdentityProviderClient(AWS_CONFIG);
    const command = new SignUpCommand({
      ClientId: NEXT_PUBLIC_COGNITO_CLIENT_ID,
      Username: email,
      Password: password,
      SecretHash: cognitoHasher(email),
    });

    await client.send(command);
    return { success: true, message: 'SUCCESS' };
  } catch (e: unknown) {
    console.log(e);
    return { success: false, message: e };
  }
};

export default signUp;
