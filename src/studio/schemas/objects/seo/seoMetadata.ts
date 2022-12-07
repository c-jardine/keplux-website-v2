import { defineType } from 'sanity';

const seoMetadata = defineType({
  name: 'seoMetadata',
  title: 'Metadata',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.max(155),
    },
    {
      name: 'canonical',
      title: 'Canonical URL',
      type: 'url',
    },
    {
      name: 'options',
      title: 'Options',
      type: 'seoOptions',
    },
  ],
});

export default seoMetadata;
