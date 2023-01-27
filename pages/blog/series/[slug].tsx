import { GetStaticPaths, GetStaticProps } from 'next';
import { SeriesPageLayout } from '../../../src/components/blog';
import { client } from '../../../src/studio/client';
import {
  allSeriesSlugsQuery,
  seriesBySlugQuery,
} from '../../../src/studio/queries';
import { SeriesProps, SlugProps } from '../../../src/studio/types';

const SeriesPage = (props: SeriesProps) => {
  return <SeriesPageLayout {...props} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: { slug: SlugProps }[] = await client.fetch(allSeriesSlugsQuery);

  return {
    paths: slugs.map((item) => {
      return { params: { slug: item.slug.current } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const series: SeriesProps = await client.fetch(seriesBySlugQuery, {
    slug: context.params.slug,
  });

  return {
    props: series,
    revalidate: 10,
  };
};

export default SeriesPage;
