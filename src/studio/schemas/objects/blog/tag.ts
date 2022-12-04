import { defineType } from 'sanity';

const tagType = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'object',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'tag',
      },
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(32),
    },
  ],
});

export default tagType;
