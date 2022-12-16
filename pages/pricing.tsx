import {
  Box,
  Container,
  Heading,
  Show,
  SimpleGrid,
  SlideFade,
  Stack,
  Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { PricingTable } from '../src/components/sections';
import { PricingAddon } from '../src/components/sections/PricingAddon';

const PricingPage: NextPage = () => {
  return (
    <>
      <Stack position="relative" w="full" alignItems="center">
        <Container w="full" maxW="4xl" position="relative">
          <SlideFade in={true}>
            <Show below="md">
              <Heading
                as="h1"
                py={20}
                fontWeight="black"
                color="black"
                textAlign="center"
                fontSize={['4xl', , '6xl']}
              >
                Find a plan or package for your business
              </Heading>
            </Show>
            <Show above="md">
              <Box pt={8} pb={48}>
                <Parallax speed={-15} opacity={[5, 0]}>
                  <Heading
                    as="h1"
                    fontWeight="black"
                    color="black"
                    textAlign="center"
                    fontSize={['4xl', , '6xl']}
                  >
                    Find a plan or package for your business
                  </Heading>
                </Parallax>
              </Box>
            </Show>
          </SlideFade>
        </Container>
      </Stack>

      <PricingTable />

      <Container maxW="7xl" w="full">
        <Stack alignItems="center" spacing={8}>
          <Stack pt={28} maxW="7xl" w="full" mx="auto">
            <Heading
              as="h2"
              fontWeight="black"
              color="black"
              fontSize={['3xl', , '5xl']}
            >
              Add-ons and other services
            </Heading>
            <Stack mt={2} color="gray.600">
              <Text>
                Not all businesses require the same features on their website.
                Whether you need something simple to showcase your business or
                portfolio, or a platform to run your business on, we&apos;ve got
                you covered.
              </Text>
            </Stack>
          </Stack>

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
              price={{ abovePrice: 'Starting at', price: '$349' }}
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
    </>
  );
};

export default PricingPage;
