import { SanityResponseBaseProps } from './core.types';

export interface UserProps extends SanityResponseBaseProps {
  name: string;
  email: string;
}
