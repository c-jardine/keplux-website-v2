import {
  AspectRatio,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { PostProps } from '../../../studio/types';
import { urlForImage } from '../../../studio/urlForImage';
import { BlogCommentForm } from '../BlogCommentForm';
import { BlogComments } from '../BlogComments';
import _BlogPageAuthorCard from './_BlogPageAuthorCard';
import _BlogPageHeader from './_BlogPageHeader';
import _BlogPageMain from './_BlogPageMain';
import { signIn, useSession } from 'next-auth/react';

/**
 * The main blog page wrapper.
 */
const BlogPageLayout = (props: PostProps) => {
  const { data: session } = useSession();

  const { seo } = props;
  return (
    <>
      <NextSeo
        title={seo.seoMetadata?.title || props.title}
        description={seo.seoMetadata?.description || props.excerpt || ''}
        canonical={
          seo.seoMetadata.canonical ||
          `https://www.keplux.com/blog/post/${props.slug.current}`
        }
        openGraph={{
          type: 'article',
          url:
            seo.seoMetadata.canonical ||
            `https://www.keplux.com/blog/post/${props.slug.current}`,
          title: seo.seoMetadata?.title || props.title,
          description: seo.seoMetadata.description || props.excerpt || '',
          images: [
            {
              url: seo.seoOpenGraph?.shareImg
                ? urlForImage(seo.seoOpenGraph.shareImg).url()
                : urlForImage(props.coverPhoto).url(),
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Container as={Stack} spacing={16} alignItems="center" maxW="8xl">
        {props.coverPhoto && Object.keys(props.coverPhoto).length > 2 && (
          <_BlogPageHeader {...props} />
        )}
        <AspectRatio ratio={1.91 / 1} maxW="4xl" w="full">
          <Image
            src={urlForImage(props.coverPhoto).url()}
            alt={props.coverPhoto.caption}
            mx="auto"
            w="full"
            h="full"
            objectFit="cover"
          />
        </AspectRatio>
        <_BlogPageMain {...props} />
        <_BlogPageAuthorCard author={props.author} />
        <Divider borderColor="whiteAlpha.600" />
        <Stack maxW="2xl" w="full" alignItems="center">
          <Heading as="h2" color="whiteAlpha.800" textAlign="center">
            {session ? 'Leave a comment' : 'Sign in to leave a comment'}
          </Heading>
          {session ? (
            <>
              <Text color="whiteAlpha.600" textAlign="center">
                Fill out the form below to leave a comment.
              </Text>
              <BlogCommentForm post={props} />
            </>
          ) : (
            <Button
              variant="primary"
              maxW="max"
              onClick={() => void signIn('auth0')}
            >
              Sign in
            </Button>
          )}
        </Stack>
        <BlogComments comments={props.comments} />
      </Container>
    </>
  );
};

export default BlogPageLayout;
