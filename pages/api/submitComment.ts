import { format } from 'date-fns';
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from 'next-sanity';
import { BlogCommentFormProps } from '../../src/components/blog';

const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { message, postId, userId } = req.body as BlogCommentFormProps;

    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: postId,
      },
      user: {
        _type: 'reference',
        _ref: userId,
      },
      datePosted: format(new Date(), 'yyyy-MM-dd HH:mm'),
      message,
    });
  } catch (e: unknown) {
    console.error(e);
    return res.status(500).json({ message: "Couldn't submit comment", e });
  }
  return res.status(200).json({ message: 'Comment submitted' });
};

export default handler;
