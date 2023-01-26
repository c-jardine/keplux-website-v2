import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface SeoMetadataProps {
  _type: 'seoMetadata';
  canonical?: string;
  description: string;
  options: {
    _type: 'seoOptions';
    nofoloow: boolean;
    noindex: boolean;
  };
  title: string;
}

export interface SeoOpenGraphProps {
  _type: 'seoOpenGraph';
  shareImg: SanityImageSource;
}

export interface SeoProps {
  _type: 'seo';
  seoMetadata: SeoMetadataProps;
  seoOpenGraph: SeoOpenGraphProps;
}
