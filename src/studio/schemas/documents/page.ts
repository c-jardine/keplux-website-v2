import { defineType } from 'sanity';

const pageType = defineType({
  name: 'page',
  title: 'Page',
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
  ],
});

export default pageType;
