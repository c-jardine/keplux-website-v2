import { defineType } from 'sanity';

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'internalLink',
      title: 'Internal Link',
      description:
        'Used to link between pages within the website, such as "/blog".',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'post' }],
      hidden: ({ parent }: { parent: { type: string } }) =>
        parent?.type !== 'internal',
    },
    {
      name: 'externalLink',
      title: 'External Link',
      description:
        'The fully-qualified URL to link to, such as "https://www.google.com".',
      type: 'url',
      hidden: ({ parent }: { parent: { type: string } }) =>
        parent?.type !== 'external',
    },
  ],
});
