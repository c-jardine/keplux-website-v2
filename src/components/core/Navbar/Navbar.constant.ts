import { NavbarItemProps } from './Navbar.types';

export const NavItems: NavbarItemProps[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Solutions',
    items: [
      {
        label: 'Design',
        href: '/services/design',
        description:
          'We work with you to build a design that represents your business and looks great on all devices, whether you need a blog, landing pages, or e-commerce.',
      },
      {
        label: 'Development',
        href: '/services/development',
        description:
          'This is where we code your website. Using modern tools, your website will be much faster for end-users than you can get from our competition.',
      },
      {
        label: 'E-Commerce',
        href: '/services/ecommerce',
        description:
          "If you need an online store, we have you covered! There are a lot of options here, so we'll work with you to determine the best options for your needs.",
      },
      {
        label: 'Content Management',
        href: '/services/content-management',
        description:
          "Your website's content may need to be updated occasionally (or frequently). We work with you to determine the best way to handle how this is done.",
      },
      {
        label: 'Hosting',
        href: '/services/hosting',
        description:
          'Websites live on the internet through a hosting provider. You can choose to host with us or we can help you get set up on your own hosting.',
      },
      {
        label: 'SEO & Accessibility',
        href: '/services/seo-and-accessibility',
        description:
          "Having a website is only useful if it can be found. The modern tools we use will boost your website higher than what you'd get from our competitors.",
      },
      {
        label: 'Analytics',
        href: '/services/analytics',
        description:
          "It's important to understand how people are engaging with your website. We can add Google Analytics to your website, giving you access to the important data.",
      },
      {
        label: 'Maintenance',
        href: '/services/maintenance',
        description:
          "We will ensure that your website's dependencies are kept up to date to prevent online threats.",
      },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Our Work',
    href: '/our-work',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
