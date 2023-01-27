import {
  AspectRatio,
  Container,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { SeriesProps } from '../../../studio/types';
import { urlForImage } from '../../../studio/urlForImage';

/**
 * The main blog page wrapper.
 */
const SeriesPageLayout = (props: SeriesProps) => {
  const { seo } = props;
  return (
    <>
      <NextSeo
        title={seo.seoMetadata?.title || props.title}
        description={seo?.seoMetadata?.description || props.description || ''}
        canonical={
          seo.seoMetadata.canonical ||
          `https://www.keplux.com/blog/series/${props.slug.current}`
        }
        openGraph={{
          type: 'article',
          url:
            seo.seoMetadata.canonical ||
            `https://www.keplux.com/blog/series/${props.slug.current}`,
          title: seo.seoMetadata?.title || props.title,
          description: seo.seoMetadata?.description || props.description || '',
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
        <Heading as="h1">{props.title}</Heading>
      </Container>
    </>
  );
};

export default SeriesPageLayout;
