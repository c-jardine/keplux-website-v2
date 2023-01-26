import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface SanityImageProps {
  _key: string;
  _type: 'photo';
  caption: string;
  image: SanityImageSource;
}
