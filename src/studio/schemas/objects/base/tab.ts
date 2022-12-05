import { defineType } from 'sanity';

const tabType = defineType({
  name: 'tab',
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
      type: 'array',
      of: [{ type: 'block' }, { type: 'codeBlock' }],
    },
  ],
});

export default tabType;
