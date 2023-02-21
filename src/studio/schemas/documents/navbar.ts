import { defineType } from 'sanity';

export default defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'navbarLink' }],
    },
  ],
});
