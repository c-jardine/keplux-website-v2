import {
  Box,
  Button,
  Container,
  Heading,
  Image as ChakraImage,
  SimpleGrid,
  SlideFade,
  Stack,
  Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { Pricing } from '../src/components/sections/Pricing';
import {
  ECommerceFeatures,
  ProfessionalFeatures,
  StarterFeatures,
} from '../src/components/sections/Pricing/features';
import { PricingAddon } from '../src/components/sections/PricingAddon';

const PricingPage: NextPage = () => {
  return (
    <>
      <Stack id="development" position="relative" w="full" alignItems="center">
        <Box position="absolute" w="full" h="full" top={0} left={0}>
          <ChakraImage
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="A person typing on a laptop at a desk."
            objectFit="cover"
            objectPosition="top"
            w="full"
            h="full"
          />
          <Box
            position="absolute"
            top={0}
            bgGradient="linear-gradient(to-br, brand.600, brand.300)"
            w="full"
            h="full"
            opacity={0.95}
          />
        </Box>
        <Container w="full" maxW="4xl" position="relative">
          <SlideFade in={true}>
            <Box pt={32} pb={56}>
              <Parallax speed={-10}>
                <Heading
                  as="h1"
                  fontWeight="black"
                  color="white"
                  textAlign="center"
                >
                  Plan and package pricing
                </Heading>
                <Stack mt={6} color="whiteAlpha.800">
                  <Text textAlign="center">
                    Not all businesses require the same features on their
                    website. Whether you need something simple to showcase your
                    business or portfolio, or a platform to run your business
                    on, we&apos;ve got you covered.
                  </Text>
                </Stack>
              </Parallax>
            </Box>
          </SlideFade>
        </Container>
      </Stack>

      <Stack alignItems="center" mt={-16} spacing={16}>
        <Pricing
          heading="Starter Plan"
          description="This package is designed for small business who don't need
              anything fancy--they just want a web presence for their business.
              It allows you to focus on your business because we manage
              everything for you."
          features={StarterFeatures}
          price={{
            abovePrice: 'No contract required',
            price: '$150',
            belowPrice: 'per month',
            primaryCta: (
              <Button
                as="a"
                href="https://buy.stripe.com/cN2g0r2PYeRI0Zq145"
                target="_blank"
                rel="external"
                variant="primaryLink"
              >
                Buy now
              </Button>
            ),
            secondaryCta: (
              <Button as="a" href="/contact" variant="secondaryLink">
                Contact us
              </Button>
            ),
          }}
        />

        <Pricing
          heading="Professional"
          description={
            <Stack>
              <Text>
                Whether you&apos;re a blogger, a realtor, a restaurant, or some
                other service provider, our content management systems can be
                customized to give you whatever control you need over your
                content.
              </Text>
              <Text fontWeight="semibold" fontSize="sm">
                Note: This package doesn&apos;t include monthly hosting,
                maintenance, or updates.
              </Text>
            </Stack>
          }
          features={ProfessionalFeatures}
          price={{
            abovePrice: 'Starting at',
            price: '$799',
            belowPrice: 'with blogging*',
            primaryCta: (
              <Button
                as="a"
                href="https://buy.stripe.com/cN2g0r2PYeRI0Zq145"
                target="_blank"
                rel="external"
                variant="primaryLink"
              >
                Buy now
              </Button>
            ),
            secondaryCta: (
              <Button as="a" href="/contact" variant="secondaryLink">
                Contact us
              </Button>
            ),
            disclaimer:
              '*Standard pricing at $795 comes with blogging capabilities. Your content management system can be customized to fit your needs, and you will receive a quote based on the level of customization needed.',
          }}
        />

        <Pricing
          heading="E-Commerce"
          description={
            <Stack>
              <Text>
                If you already have a website, our e-commerce solutions can be
                customized to match your existing website. Otherwise, don&apos;t
                forget to purchase website development services as well!
              </Text>
              <Text fontWeight="semibold" fontSize="sm">
                Note: This package doesn&apos;t include monthly hosting,
                maintenance, or updates.
              </Text>
            </Stack>
          }
          features={ECommerceFeatures}
          price={{
            abovePrice: 'Starting at',
            price: '$1499',
            primaryCta: (
              <Button
                as="a"
                href="https://buy.stripe.com/cN2g0r2PYeRI0Zq145"
                target="_blank"
                rel="external"
                variant="primaryLink"
              >
                Buy now
              </Button>
            ),
            secondaryCta: (
              <Button as="a" href="/contact" variant="secondaryLink">
                Contact us
              </Button>
            ),
          }}
        />
      </Stack>

      <Stack alignItems="center">
        <Stack pt={28} maxW="4xl" w="full" mx="auto">
          <Heading as="h2" fontWeight="black" textAlign="center">
            Add-ons and other services
          </Heading>
          <Stack mt={2} color="gray.600">
            <Text textAlign="center">
              Not all businesses require the same features on their website.
              Whether you need something simple to showcase your business or
              portfolio, or a platform to run your business on, we&apos;ve got
              you covered.
            </Text>
          </Stack>
        </Stack>

        <Container maxW="7xl" w="full">
          <SimpleGrid columns={{ base: 1, lg: 3 }} gap={16}>
            <PricingAddon
              heading="Landing page"
              description="Make a statement and boost your conversions with a custom landing page that visitors will see after clicking an ad for your business."
              price={{ abovePrice: 'Starting at', price: '$495' }}
            />
            <PricingAddon
              heading="Hosting, maintenance, and updates"
              description="We'll handle hosting, maintenance, and content updates for your website."
              price={{ price: '$95', belowPrice: 'per month' }}
            />
            <PricingAddon
              heading="Google Analytics"
              description="Get valuable insight on how your visitors engage with your website. This helps you understand what is and isn't working with your marketing strategy."
              price={{ price: '$75', belowPrice: 'setup fee' }}
            />
            <PricingAddon
              heading="On-page SEO"
              description="Add or optimize priority SEO tags and structure, optimize images for SEO and performance, and verify internal links to reduce bounce rate."
              price={{ price: '$149', belowPrice: 'per page' }}
            />
            <PricingAddon
              heading="Additional pages"
              description="If you need more pages than what's included in your package, you can add more any time!"
              price={{ price: '$95', belowPrice: 'per page' }}
            />
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  );
};

export default PricingPage;
