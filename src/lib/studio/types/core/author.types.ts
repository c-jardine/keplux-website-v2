import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityResponseBaseProps, SlugProps } from './core.types';

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
