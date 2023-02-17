import { defineType } from 'sanity';

export default defineType({
  title: 'Photo',
  name: 'photo',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
  ],
});
