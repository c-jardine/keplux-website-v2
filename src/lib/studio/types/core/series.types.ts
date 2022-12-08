import { SanityResponseBaseProps, SlugProps } from './core.types';

/**
 * Props returned by Sanity queries on the Series document type.
 */
export interface SeriesProps extends SanityResponseBaseProps {
  _type: 'series';
  slug: SlugProps;
  title: string;
}
