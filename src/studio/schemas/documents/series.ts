import { defineType } from 'sanity';
import { IoIosPaper } from '@react-icons/all-files/io/IoIosPaper';

const series = defineType({
  name: 'series',
  title: 'Series',
  icon: IoIosPaper,
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
