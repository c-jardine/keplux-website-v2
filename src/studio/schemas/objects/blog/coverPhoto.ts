import { defineType } from 'sanity';

export default defineType({
  name: 'coverPhoto',
  title: 'Cover Photo',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
  ],
});
