const NEXT_PUBLIC_AWS_ACCESS_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_ID;
const NEXT_PUBLIC_AWS_ACCESS_SECRET = process.env.NEXT_PUBLIC_AWS_ACCESS_SECRET;

export const AWS_CONFIG = {
  credentials: {
    accessKeyId: NEXT_PUBLIC_AWS_ACCESS_ID,
    secretAccessKey: NEXT_PUBLIC_AWS_ACCESS_SECRET,
  },
  region: 'us-east-2',
};
