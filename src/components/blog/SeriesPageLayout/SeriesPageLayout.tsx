import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Image,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { NextSeo } from 'next-seo';
import { SeriesProps } from '../../../studio/types';
import { urlForImage } from '../../../studio/urlForImage';
import { KLink } from '../../core';

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
      <Container as={Stack} spacing={16} alignItems="center" maxW="8xl">
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
        <Stack maxW="4xl">
          <Heading as="h1" color="whiteAlpha.800">
            {props.title}
          </Heading>
          <Text color="whiteAlpha.600">{props.description}</Text>
          <Box>
            <Heading as="h3" color="whiteAlpha.800" fontSize="sm">
              Posts in this series
            </Heading>
            <UnorderedList mt={2} spacing={2}>
              {props.posts?.map((post) => (
                <ListItem key={post._key} display="flex">
                  <ListIcon
                    as={FaChevronRight}
                    color="whiteAlpha.800"
                    w={3}
                    h={3}
                    mt="6px"
                  />
                  <KLink href={`/blog/post/${post.slug.current}`}>
                    {post.title}
                  </KLink>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default SeriesPageLayout;
