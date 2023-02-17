import { defineType } from 'sanity';

export default defineType({
  name: 'seoOpenGraph',
  title: 'OpenGraph',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'shareImg',
      title: 'Share Image',
      type: 'image',
    },
  ],
});
