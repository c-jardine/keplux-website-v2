import { defineType } from 'sanity';

const codeTabType = defineType({
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

export default codeTabType;
