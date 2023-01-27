import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityResponseBaseProps, SlugProps } from './core.types';

/**
 * Props returned by Sanity queries on the Post document type.
 */
export interface ProjectProps extends SanityResponseBaseProps {
  _type: 'project';
  description: string;
  gallery: SanityImageSource[];
  slug: SlugProps;
  subtitle: string;
  title: string;
  url: string;
}
