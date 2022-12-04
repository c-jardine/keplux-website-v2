import { defineType } from 'sanity';

const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
});

export default pageType;
