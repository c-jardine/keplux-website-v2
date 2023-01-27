import { SanityResponseBaseProps, SlugProps } from './core.types';
import { PostProps } from './post.types';
import { TagProps } from './tag.types';

/**
 * Props returned by Sanity queries on the Series document type.
 */
export interface SeriesProps extends SanityResponseBaseProps {
  _type: 'series';
  posts?: PostProps[];
  slug: SlugProps;
  tags: TagProps[];
  title: string;
}
