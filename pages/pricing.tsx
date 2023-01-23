import { Container, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { FaBoxOpen } from '@react-icons/all-files/fa/FaBoxOpen';
import { FaBriefcase } from '@react-icons/all-files/fa/FaBriefcase';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { KLink } from '../src/components/core';
import { LeadInHeading, PricingTable } from '../src/components/sections';
import { PricingAddon } from '../src/components/sections/PricingAddon';

const PricingPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Web design and development prices"
        description="Monthly plans to get your business online quickly. Custom websites available for when you need something more."
        canonical="https://www.keplux.com/pricing"
      />
      <Stack alignItems="center" spacing={16}>
        <Container maxW="7xl" w="full">
          <Stack alignItems="center" spacing={12}>
            <Stack alignItems="center">
              <Heading
                as="h1"
                fontSize={['5xl', , '6xl', '7xl']}
                fontWeight="black"
                textAlign="center"
                color="black"
              >
                Find a plan or package for your business
              </Heading>
              <Heading
                as="h2"
                maxW="2xl"
                w="full"
                fontSize="xl"
                textAlign="center"
                fontWeight="medium"
                color="gray.500"
              >
                Choose a pre-designed package or build your own from scratch.
                Need something different?{' '}
                <KLink href="/contact" color="brand.600">
                  Contact us
                </KLink>{' '}
                and we&apos;ll help you out.
              </Heading>
            </Stack>
          </Stack>
        </Container>

        <Container maxW="7xl" w="full">
          <Stack alignItems="center" w="full" spacing={8}>
            <LeadInHeading
              smallText="Packages to get you up and running"
              heading="Business packages"
              icon={FaBriefcase}
              color={['brand.600', 'brand.400']}
            />
          </Stack>
        </Container>

        <PricingTable />

        <Container maxW="7xl" w="full">
          <Stack alignItems="center" w="full" spacing={8}>
            <LeadInHeading
              smallText="Other services"
              heading="Add-ons and more"
              icon={FaBoxOpen}
              color={['brand.600', 'brand.400']}
            />
          </Stack>
        </Container>

        <Container maxW="7xl" w="full">
          <Stack alignItems="center" spacing={8}>
            <SimpleGrid columns={{ base: 1, lg: 3 }} columnGap={4} rowGap={8}>
              <PricingAddon
                heading="Landing page"
                description="Make a statement and boost your conversions with a custom landing page that visitors will see after clicking an ad for your business."
                price={{ abovePrice: 'Starting at', price: '$495' }}
                cta={{
                  label: 'Contact us now',
                  href: '/contact',
                }}
              />
              <PricingAddon
                heading="Hosting, maintenance, and updates"
                description="We'll handle hosting, maintenance, and content updates for your website."
                price={{ price: '$95', belowPrice: 'per month' }}
                cta={{
                  label: 'Contact us now',
                  href: '/contact',
                }}
              />
              <PricingAddon
                heading="On-page SEO"
                description="Add or optimize priority SEO tags and structure, optimize images for SEO and performance, and verify internal links to reduce bounce rate."
                price={{ abovePrice: 'Starting at', price: '$249' }}
                cta={{
                  label: 'Contact us now',
                  href: '/contact',
                }}
              />
              <PricingAddon
                heading="Google Analytics"
                description="Generate reports that provide insights on where visitors are from, where they found your website from, the pages they visited, and much more."
                price={{ price: '$75', belowPrice: 'setup fee' }}
                cta={{
                  label: 'Learn about Google Analytics',
                  href: 'https://marketingplatform.google.com/about/analytics/',
                }}
              />
              <PricingAddon
                heading="Hotjar"
                description="Collect behavior analytics and feedback data to understand your visitors. View heatmaps, scrollmaps, and recordings showing where and how visitors interact."
                price={{ price: '$75', belowPrice: 'setup fee' }}
                cta={{
                  label: 'Learn about Hotjar',
                  href: 'https://help.hotjar.com/hc/en-us/articles/115009334567-What-is-Hotjar-',
                }}
              />
              <PricingAddon
                heading="Additional pages"
                description="If you need more pages than what's included in your package, you can add more any time!"
                price={{ price: '$95', belowPrice: 'per page' }}
                cta={{
                  label: 'Contact us now',
                  href: '/contact',
                }}
              />
            </SimpleGrid>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default PricingPage;
