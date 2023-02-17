import { SanityResponseBaseProps } from './core.types';
import { PostProps } from './post.types';

export interface CommentProps extends SanityResponseBaseProps {
  _type: 'comment';
  body: string;
  datePosted: string;
  name: string;
  post: PostProps;
}
