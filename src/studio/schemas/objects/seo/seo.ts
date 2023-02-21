import { defineType } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'seoMetadata',
      title: 'Metadata',
      type: 'seoMetadata',
    },
    {
      name: 'seoOpenGraph',
      title: 'OpenGraph',
      type: 'seoOpenGraph',
    },
  ],
});
