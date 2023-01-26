import { defineType } from 'sanity';

const photo = defineType({
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

export default photo;
