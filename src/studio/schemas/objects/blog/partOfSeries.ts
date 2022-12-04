import { defineType } from 'sanity';

const partOfSeriesType = defineType({
  name: 'postSeries',
  title: 'Series',
  type: 'object',
  fields: [
    {
      name: 'isPartOfSeries',
      title: 'Post is part of a series',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'seriesTitle',
      title: 'Series Title',
      type: 'reference',
      to: [{ type: 'series' }],
      hidden: ({ parent }) => !parent.isPartOfSeries,
    },
  ],
});

export default partOfSeriesType;
