import { MdChat } from '@react-icons/all-files/md/MdChat';
import { defineType } from 'sanity';

export default defineType({
  title: 'Comment',
  name: 'comment',
  icon: MdChat,
  type: 'document',
  fields: [
    {
      title: 'User',
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      title: 'Date posted',
      name: 'datePosted',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Message',
      name: 'message',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Post',
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }],
    },
  ],
  preview: {
    select: {
      name: 'user.name',
      message: 'message',
      post: 'post.title',
    },
    prepare({
      name,
      message,
      post,
    }: {
      name: string;
      message: string;
      post: string;
    }) {
      return {
        title: `${name} on ${post}`,
        subtitle: message,
      };
    },
  },
});
