import { defineType } from 'sanity';

const seoType = defineType({
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

export default seoType;
