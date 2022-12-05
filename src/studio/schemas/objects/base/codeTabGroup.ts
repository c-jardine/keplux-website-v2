import { defineType } from 'sanity';

const codeTabGroupType = defineType({
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

export default codeTabGroupType;
