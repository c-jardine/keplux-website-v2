import {
  CoverPhotoProps,
  SanityResponseBaseProps,
  SlugProps,
} from './core.types';
import { PostProps } from './post.types';
import { SeoProps } from './seo.types';
import { TagProps } from './tag.types';

/**
 * Props returned by Sanity queries on the Series document type.
 */
export interface SeriesProps extends SanityResponseBaseProps {
  _type: 'series';
  coverPhoto?: CoverPhotoProps;
  description: string;
  posts?: PostProps[];
  seo?: SeoProps;
  slug: SlugProps;
  tags: TagProps[];
  title: string;
}
