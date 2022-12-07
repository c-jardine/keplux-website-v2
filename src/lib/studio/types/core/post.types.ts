import type { PortableTextBlock } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { TypedObject } from 'sanity';
import {
  CoverPhotoProps,
  SanityResponseBaseProps,
  SlugProps,
} from './core.types';
import { SeoProps } from './seo.types';

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
  _id: string;
  author: AuthorProps;
  content: PortableTextBlock[] | TypedObject | TypedObject[];
  coverPhoto: CoverPhotoProps;
  excerpt: string;
  postSeries?: SeriesProps;
  publishedOn: string;
  seo: SeoProps;
  slug: SlugProps;
  title: string;
}
