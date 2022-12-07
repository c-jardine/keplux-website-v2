import { Container, Stack } from '@chakra-ui/react';
import { PostProps } from '../../../lib/studio/types';
import _BlogPageAuthorCard from './_BlogPageAuthorCard';
import _BlogPageHeader from './_BlogPageHeader';
import _BlogPageMain from './_BlogPageMain';

/**
 * The main blog page wrapper.
 */
const BlogPageLayout = (props: PostProps) => {
  return (
    <Container as={Stack} spacing={16} my={16} alignItems="center" maxW="8xl">
      {props.coverPhoto && Object.keys(props.coverPhoto).length > 2 && (
        <_BlogPageHeader coverPhoto={props.coverPhoto} />
      )}
      <_BlogPageMain {...props} />
      <_BlogPageAuthorCard author={props.author} />
    </Container>
  );
};

export default BlogPageLayout;
