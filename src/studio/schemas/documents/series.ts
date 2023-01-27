import { IoIosPaper } from '@react-icons/all-files/io/IoIosPaper';
import { defineType } from 'sanity';

const series = defineType({
  name: 'series',
  title: 'Series',
  icon: IoIosPaper,
  type: 'document',
  groups: [
    { name: 'info', title: 'Info', default: true },
    { name: 'metadata', title: 'Metadata' },
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
      validation: (Rule) => Rule.required().min(2),
      group: 'info',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: 'info',
    },
    {
      name: 'coverPhoto',
      title: 'Cover Photo',
      type: 'coverPhoto',
      group: 'info',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      group: 'info',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'metadata',
    },
  ],
  preview: {
    select: {
      title: 'title',
      tag: 'tags.0.label',
    },
    prepare(selection: { title: string; tag: string }) {
      const { title, tag } = selection;
      return {
        title,
        subtitle: tag
          ? `Tagged with: ${tag}`
          : 'No tags - consider adding some',
      };
    },
  },
});

export default series;
