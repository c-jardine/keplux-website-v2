import { defineType } from 'sanity';

const coverPhotoType = defineType({
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

export default coverPhotoType;
