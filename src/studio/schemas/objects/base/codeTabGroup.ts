import { defineType } from 'sanity';

export default defineType({
  name: 'codeTabGroup',
  title: 'Tab Group',
  type: 'object',
  fields: [
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [{ type: 'codeTab' }],
    },
  ],
});
