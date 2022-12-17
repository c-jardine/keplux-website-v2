import { FaLaptopCode } from '@react-icons/all-files/fa/FaLaptopCode';
import { defineType } from 'sanity';

const projectType = defineType({
  name: 'project',
  title: 'Project',
  icon: FaLaptopCode,
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
});

export default projectType;
