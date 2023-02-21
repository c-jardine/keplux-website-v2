import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from 'next-sanity';
import { UserProps } from '../../src/studio/types';

const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

/**
 * Updates the signed in user's profile information.
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id, name } = req.body as UserProps;

    await client.patch(_id).set({ name }).commit();
  } catch (e: unknown) {
    console.error(e);
    return res.status(500).json({ message: "Couldn't update user.", e });
  }
  return res.status(200).json({ message: 'User updated.' });
};

export default handler;
