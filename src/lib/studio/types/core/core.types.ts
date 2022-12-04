export interface SanityResponseBaseProps {
  _createdAt: string;
  _id: string;
  __rev: string;
  _updatedAt: string;
}

export type SlugProps = {
  _type: 'slug';
  current: string;
};
