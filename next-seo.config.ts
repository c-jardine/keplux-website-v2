import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | Keplux Development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.keplux.com',
    siteName: 'Keplux Development',
    images: [
      {
        url: 'https://i.imgur.com/8lVjcsD.jpg',
      },
    ],
  },
  twitter: {
    handle: '@kepluxdev',
    site: '@kepluxdev',
    cardType: 'summary_large_image',
  },
  themeColor: 'black',
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
    { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
  ],
  additionalMetaTags: [
    { name: 'msapplication-TileColor', content: '#da532c' },
    {
      name: 'msapplication-config',
      content: '/favicon/browserconfig.xml',
    },
  ],
};

export default config;
