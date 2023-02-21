import { defineType } from 'sanity';

export default defineType({
  name: 'codeTab',
  title: 'Tab',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'codeBlock',
    },
  ],
});
