import { defineType } from 'sanity';

const tabGroupType = defineType({
  name: 'tabGroup',
  title: 'Tab Group',
  type: 'object',
  fields: [
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [{ type: 'tab' }],
    },
  ],
});

export default tabGroupType;
