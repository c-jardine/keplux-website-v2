import { Container, Heading, Stack } from '@chakra-ui/react';
import { SeriesProps } from '../../../studio/types';

/**
 * The main blog page wrapper.
 */
const SeriesPageLayout = (props: SeriesProps) => {
  return (
    <>
      {/* <NextSeo
        title={props.title}
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
      /> */}
      <Container as={Stack} spacing={16} my={16} alignItems="center" maxW="8xl">
        <Heading as="h1">{props.title}</Heading>
      </Container>
    </>
  );
};

export default SeriesPageLayout;
