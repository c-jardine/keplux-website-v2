import { ColorProps } from './color.types';
import { SanityResponseBaseProps, SlugProps } from './core.types';

export interface TagProps extends SanityResponseBaseProps {
  _key?: string;
  _type?: 'tag';
  label: string;
  color: ColorProps;
  slug: SlugProps;
}
