import { defineType } from 'sanity';

const codeBlockType = defineType({
  name: 'codeBlock',
  title: 'Code Block',
  type: 'object',
  fieldsets: [{ name: 'info', title: 'Info', options: { columns: 2 } }],
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'code',
    },
    {
      name: 'filename',
      title: 'Filename',
      type: 'string',
      fieldset: 'info',
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      fieldset: 'info',
    },
  ],
});

export default codeBlockType;
