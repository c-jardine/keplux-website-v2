import { defineType } from 'sanity';

export default defineType({
  title: 'Comment',
  name: 'comment',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Date posted',
      name: 'datePosted',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
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
      name: 'name',
      comment: 'comment',
      post: 'post.title',
    },
    prepare({
      name,
      comment,
      post,
    }: {
      name: string;
      comment: string;
      post: string;
    }) {
      return {
        title: `${name} on ${post}`,
        subtitle: comment,
      };
    },
  },
});
