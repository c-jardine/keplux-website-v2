import { PricingFeatureProps } from './features.types';

const PricingFeatures: PricingFeatureProps[] = [
  {
    id: 1,
    feature: 'Website',
    description:
      'Choose one of our beautiful, high performance templates and provide content for up to 5 pages.',
    included: {
      starter: true,
      professional: true,
      ecommerce: true,
      ultimate: true,
    },
  },
  {
    id: 2,
    feature: 'Responsive design',
    description:
      'We make sure your site looks great on mobile devices, desktop devices, and everything in between.',
    included: {
      starter: true,
      professional: true,
      ecommerce: true,
      ultimate: true,
    },
  },
  {
    id: 3,
    feature: 'On-page SEO',
    description:
      'Help your page rank high in search engine results with crucial SEO and accessibility implementations.',
    included: {
      starter: true,
      professional: true,
      ecommerce: true,
      ultimate: true,
    },
  },
  {
    id: 4,
    feature: 'Google Maps',
    description:
      'Show your visitors where your business is located with an interactive map provided by Google Maps.',
    included: {
      starter: true,
      professional: true,
      ecommerce: true,
      ultimate: true,
    },
  },
  {
    id: 5,
    feature: 'Standard contact form',
    description:
      "Let users send you their name, contact information, and a message. We'll make sure it gets to your inbox.",
    included: {
      starter: true,
      professional: true,
      ecommerce: true,
      ultimate: true,
    },
  },
  {
    id: 6,
    feature: 'Custom contact form',
    description:
      "Build a custom form to get the information you need from visitors. We'll make sure it gets to your inbox.",
    included: {
      starter: false,
      professional: false,
      ecommerce: false,
      ultimate: true,
    },
  },
  {
    id: 7,
    feature: 'Hosting, maintenance, and updates',
    description:
      'We handle hosting and maintenance for your website. We will also provide content updates as you request them.',
    included: {
      starter: true,
      professional: false,
      ecommerce: false,
      ultimate: false,
    },
  },
  {
    id: 8,
    feature: 'Content management system',
    description:
      'Customizable content management system with dynamic pages to showcase your content.',
    included: {
      starter: false,
      professional: true,
      ecommerce: false,
      ultimate: true,
    },
  },
  {
    id: 9,
    feature: 'E-commerce platform',
    description:
      'Customizable e-commerce platform with dynamic pages to showcase your products and/or services.',
    included: {
      starter: false,
      professional: false,
      ecommerce: true,
      ultimate: true,
    },
  },
  {
    id: 10,
    feature: 'Google Analytics',
    description:
      'Generate reports that provide insights on where visitors are from, where they found your website from, the pages they visited, and much more.',
    included: {
      starter: false,
      professional: true,
      ecommerce: true,
      ultimate: true,
    },
  },
  {
    id: 11,
    feature: 'Hotjar',
    description:
      'Collect behavior analytics and feedback data to understand your visitors. View heatmaps, scrollmaps, and recordings showing where and how visitors interact.',
    included: {
      starter: false,
      professional: false,
      ecommerce: false,
      ultimate: true,
    },
  },
];

export default PricingFeatures;
