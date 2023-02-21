import { SanityResponseBaseProps } from './core.types';
import { PostProps } from './post.types';
import { UserProps } from './user.types';

export interface CommentProps extends SanityResponseBaseProps {
  _type: 'comment';
  message: string;
  datePosted: string;
  name: string;
  post: PostProps;
  user: UserProps;
}
