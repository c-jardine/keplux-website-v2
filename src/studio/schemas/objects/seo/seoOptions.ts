import { defineType } from 'sanity';

const seoOptionsType = defineType({
  name: 'seoOptions',
  title: 'Options',
  type: 'object',
  options: {
    columns: 2,
    collapsible: false,
  },
  fields: [
    {
      name: 'noindex',
      title: 'noindex',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'nofollow',
      title: 'nofollow',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
  ],
});

export default seoOptionsType;
