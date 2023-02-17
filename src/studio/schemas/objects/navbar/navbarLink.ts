import { defineType } from 'sanity';

export default defineType({
  name: 'navbarLink',
  title: 'Navbar Link',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      description: 'The text that appears on the nav button.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'href',
      title: 'Route',
      description: 'The url where the button will navigate to.',
      type: 'link',
    },
  ],
});
