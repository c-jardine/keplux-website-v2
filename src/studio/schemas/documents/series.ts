import { defineType } from 'sanity';

const series = defineType({
  name: 'series',
  title: 'Series',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(2),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    },
    {
      name: 'posts',
      title: 'Posts',
      description: 'The posts in the series.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
    },
  ],
});

export default series;
