import { SanityImageSource } from '@sanity/image-url/lib/types/types';
export interface SanityResponseBaseProps {
  _createdAt: string;
  _id: string;
  __rev: string;
  _updatedAt: string;
  _key?: string;
}

export type SlugProps = {
  _type: 'slug';
  current: string;
};

export type CoverPhotoProps = SanityImageSource & {
  caption: string;
};
