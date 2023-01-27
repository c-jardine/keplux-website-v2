import { AspectRatio, Container, Image, Stack } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { PostProps } from '../../../studio/types';
import { urlForImage } from '../../../studio/urlForImage';
import _BlogPageAuthorCard from './_BlogPageAuthorCard';
import _BlogPageHeader from './_BlogPageHeader';
import _BlogPageMain from './_BlogPageMain';

/**
 * The main blog page wrapper.
 */
const BlogPageLayout = (props: PostProps) => {
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
      <Container as={Stack} spacing={16} my={16} alignItems="center" maxW="8xl">
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
      </Container>
    </>
  );
};

export default BlogPageLayout;
