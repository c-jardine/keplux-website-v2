import React from 'react';
import { client } from '../studio/client';
import { seriesBySlugQuery } from '../studio/queries';
import { SeriesProps } from '../studio/types';

const useFeaturedSeries = () => {
  const [featuredSeries, setFeaturedSeries] = React.useState<SeriesProps>(null);

  React.useEffect(() => {
    void (async () => {
      const series: SeriesProps = await client.fetch(seriesBySlugQuery, {
        slug: 'building-a-blog-with-next-js-typescript-and-sanity-studio-v3',
      });
      setFeaturedSeries(series);
    })();
  }, []);

  return [featuredSeries] as const;
};

export default useFeaturedSeries;
