import type { PortableTextBlock } from '@portabletext/types';
import { TypedObject } from 'sanity';
import { AuthorProps } from './author.types';
import { CommentProps } from './comment.types';
import {
  CoverPhotoProps,
  SanityResponseBaseProps,
  SlugProps,
} from './core.types';
import { SeoProps } from './seo.types';
import { SeriesProps } from './series.types';
import { TagProps } from './tag.types';

/**
 * Props returned by Sanity queries on the Post document type.
 */
export interface PostProps extends SanityResponseBaseProps {
  _id: string;
  _type: 'post';
  author: AuthorProps;
  comments: CommentProps[];
  content: PortableTextBlock[] | TypedObject | TypedObject[];
  coverPhoto: CoverPhotoProps;
  excerpt: string;
  postSeries?: SeriesProps;
  publishedOn: string;
  seo: SeoProps;
  slug: SlugProps;
  tags: TagProps[];
  title: string;
}
