import { defineType } from 'sanity';

export default defineType({
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
});
