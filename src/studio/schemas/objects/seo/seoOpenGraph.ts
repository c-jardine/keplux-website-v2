import { defineType } from 'sanity';

const seoOpenGraph = defineType({
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

export default seoOpenGraph;
