import { Circle } from '@chakra-ui/react';
import { FaTag } from '@react-icons/all-files/fa/FaTag';
import { defineType } from 'sanity';

export default defineType({
  name: 'tag',
  title: 'Tag',
  icon: FaTag,
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'label',
      },
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(32),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
    },
  ],
  preview: {
    select: {
      title: 'label',
      color: 'color',
    },
    prepare(selection: { title: string; color: { hex: string } }) {
      const { title, color } = selection;
      return {
        title: title,
        media: <Circle bg={color.hex || 'gray.400'} size={3} />,
      };
    },
  },
});
