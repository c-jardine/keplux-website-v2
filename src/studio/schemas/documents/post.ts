import { defineType } from 'sanity';

const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    { name: 'info', title: 'Info', default: true },
    { name: 'content', title: 'Content' },
  ],
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
      group: 'info',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'info',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'info',
    },
    {
      name: 'postSeries',
      title: 'Series',
      type: 'reference',
      to: [{ type: 'series' }],
      group: 'info',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
      options: {
        disableNew: true,
      },
      group: 'info',
    },
    {
      name: 'publishedOn',
      title: 'Publish Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      group: 'info',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
      options: {
        layout: 'tags',
      },
      group: 'info',
    },
    {
      name: 'coverPhoto',
      title: 'Cover Photo',
      type: 'coverPhoto',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'codeBlock' }, { type: 'codeTabGroup' }],
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
  ],
});

export default postType;
