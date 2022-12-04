import { defineType } from 'sanity';

const navbarType = defineType({
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

export default navbarType;
