import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { TypedObject } from 'sanity';
import {
  CoverPhotoProps,
  SanityResponseBaseProps,
  SlugProps,
} from './core.types';

/**
 * Props returned by Sanity queries on the Author document type.
 */
export interface AuthorProps extends SanityResponseBaseProps {
  _type: 'author';
  avatar: SanityImageSource;
  bio: string;
  name: string;
  slug: SlugProps;
}

/**
 * Props returned by Sanity queries on the Series document type.
 */
export interface SeriesProps extends SanityResponseBaseProps {
  _type: 'series';
  slug: SlugProps;
  title: string;
}

/**
 * Props returned by Sanity queries on the Post document type.
 */
export interface PostProps extends SanityResponseBaseProps {
  author: AuthorProps;
  content: TypedObject | TypedObject[];
  coverPhoto: CoverPhotoProps;
  postSeries?: SeriesProps;
  publishedOn: string;
  slug: SlugProps;
  title: string;
}
