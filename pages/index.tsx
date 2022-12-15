import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  Heading,
  HStack,
  Icon,
  Image as ChakraImage,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { CgListTree } from '@react-icons/all-files/cg/CgListTree';
import { FaBolt } from '@react-icons/all-files/fa/FaBolt';
import { FaChartLine } from '@react-icons/all-files/fa/FaChartLine';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { FaCog } from '@react-icons/all-files/fa/FaCog';
import { FaDollarSign } from '@react-icons/all-files/fa/FaDollarSign';
import { FaEye } from '@react-icons/all-files/fa/FaEye';
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe';
import { FaPlug } from '@react-icons/all-files/fa/FaPlug';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import { IoIosPaper } from '@react-icons/all-files/io/IoIosPaper';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import paymentIllustration from '../public/illustrations/payments.png';
import { IconFeature, LighthouseScore } from '../src/components/core';
import {
  LeadInHeading,
  SplitSection,
  Subsection,
} from '../src/components/sections';

const Home = () => {
  return (
    <>
      <NextSeo
        title="Web development in Toledo, OH"
        description="Websites built with modern technologies, resulting in lightning performance, amazing SEO, and more conversions."
        canonical="https://www.keplux.com"
      />
      <Stack alignItems="center" spacing={16} py={28}>
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
                Modern Web Development
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
                At Keplux Development, we build websites with modern
                technologies and strategies that give your website lightning
                fast performance and amazing SEO that help boost conversions.
              </Heading>
            </Stack>
            <HStack spacing={4}>
              <Button variant="primary">Start your project</Button>
              <Button variant="secondary">View pricing</Button>
            </HStack>
          </Stack>
        </Container>

        <Container maxW="7xl" w="full">
          <Stack alignItems="center" w="full" spacing={8}>
            <LeadInHeading
              smallText="Why choose Keplux Development?"
              heading="Performance"
              icon={FaBolt}
              color={['brand.600', 'brand.400']}
            />
            <Stack alignItems="center" spacing={16} w="full">
              <Stack alignItems="center">
                <Heading as="h4" maxW="3xl" w="full" textAlign="center">
                  Don&apos;t miss out on conversions because of a slow website.
                </Heading>
                <Text
                  maxW="xl"
                  w="full"
                  fontSize="xl"
                  textAlign="center"
                  color="gray.500"
                >
                  The longer your website takes to load, the sooner your
                  visitors will leave. That shouldn&apos;t happen.
                </Text>
              </Stack>
              <SplitSection
                containerStyle={{ maxW: '6xl', w: 'full', gap: 16 }}
              >
                <SplitSection.LeftContent>
                  <Stack spacing={12}>
                    <LighthouseScore
                      heading="Keplux Development"
                      performance={96}
                      accessibility={98}
                      bestPractices={100}
                      seo={100}
                    />
                    <LighthouseScore
                      heading="WordPress Websites"
                      performance={43}
                      accessibility={65}
                      bestPractices={58}
                      seo={86}
                    />
                  </Stack>
                </SplitSection.LeftContent>
                <SplitSection.RightContent>
                  <Stack spacing={8} px={{ base: 4, md: 8 }}>
                    <Stack spacing={3}>
                      <Center
                        bgGradient="linear-gradient(to-br, brand.600, brand.400)"
                        w={12}
                        h={12}
                        rounded="lg"
                      >
                        <Icon as={FaGlobe} color="white" w={5} h={5} />
                      </Center>
                      <Heading as="h5" fontSize="xl" fontWeight="semibold">
                        Websites built with the power of React
                      </Heading>
                      <Text color="gray.500" letterSpacing="wide">
                        Your website is built with the same technology used by
                        Facebook, Netflix, Instagram, and more.
                      </Text>
                    </Stack>
                    <Stack spacing={3}>
                      <Center
                        bgGradient="linear-gradient(to-br, brand.600, brand.400)"
                        w={12}
                        h={12}
                        rounded="lg"
                      >
                        <Icon as={FaTrash} color="white" w={5} h={5} />
                      </Center>
                      <Heading as="h5" fontSize="xl" fontWeight="semibold">
                        No unnecessary packages or plugins
                      </Heading>
                      <Text color="gray.500" letterSpacing="wide">
                        Websites with unnecessary packages and plugins reduce
                        performance and increase security risks.
                      </Text>
                    </Stack>
                    <Stack spacing={3}>
                      <Center
                        bgGradient="linear-gradient(to-br, brand.600, brand.400)"
                        w={12}
                        h={12}
                        rounded="lg"
                      >
                        <Icon as={FaChartLine} color="white" w={6} h={6} />
                      </Center>
                      <Heading as="h5" fontSize="xl" fontWeight="semibold">
                        Performance monitoring throughout development
                      </Heading>
                      <Text color="gray.500" letterSpacing="wide">
                        We catch performance issues quickly, eliminating
                        bottlenecks and ensuring your website is as fast as
                        possible.
                      </Text>
                    </Stack>
                  </Stack>
                </SplitSection.RightContent>
              </SplitSection>
            </Stack>
          </Stack>
        </Container>

        <Container maxW="7xl" w="full">
          <Stack alignItems="center" w="full" spacing={8}>
            <LeadInHeading
              smallText="Customizable content management system"
              heading="Headless Content Management"
              icon={IoIosPaper}
              color={['orange.600', 'orange.400']}
            />
            <Stack alignItems="center" spacing={{ base: 0, lg: 16 }} w="full">
              <Stack alignItems="center">
                <Heading as="h4" maxW="3xl" w="full" textAlign="center">
                  Manage your content any way you want
                </Heading>
                <Text
                  maxW="xl"
                  w="full"
                  fontSize="xl"
                  textAlign="center"
                  color="gray.500"
                >
                  Fully customizable content management system to manage blogs,
                  rental properties, or anything else you can think of.
                </Text>
              </Stack>

              <Box>
                <Subsection
                  markerPos={40}
                  isFirst
                  flipContentOnMobile
                  leftContent={
                    <Stack spacing={8}>
                      <Stack
                        spacing={3}
                        mt={{ lg: '4.5rem' }}
                        h="full"
                        alignItems={{ lg: 'flex-end' }}
                      >
                        <Center
                          bgGradient="linear-gradient(to-br, orange.600, orange.400)"
                          w={12}
                          h={12}
                          rounded="lg"
                        >
                          <Icon as={CgListTree} color="white" w={5} h={5} />
                        </Center>
                        <Heading as="h5" fontSize="xl" fontWeight="semibold">
                          Structured content matching your workflow
                        </Heading>
                        <Text
                          color="gray.500"
                          letterSpacing="wide"
                          textAlign={{ lg: 'right' }}
                        >
                          Whatever the content is, it&apos;s easy to create,
                          update, remove, collaborate, and revert to previous
                          states.
                        </Text>
                      </Stack>
                      <Button
                        variant="subtle"
                        as={Link}
                        href="https://www.sanity.io/structured-content"
                        target="_blank"
                        rel="noreferrer"
                        justifyContent="space-between"
                        w="full"
                      >
                        <Text>Read more about structured content</Text>
                        <Icon as={FaChevronRight} color="brand.600" />
                      </Button>
                    </Stack>
                  }
                  rightContent={
                    <Link
                      href="https://cdn.sanity.io/images/3do82whm/next/ba70e2ccf32f958597d1f5ad5d97a91643618340-1397x966.png?w=800&h=553&fit=clip&auto=format"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ChakraImage
                        src="https://cdn.sanity.io/images/3do82whm/next/ba70e2ccf32f958597d1f5ad5d97a91643618340-1397x966.png?w=800&h=553&fit=clip&auto=format"
                        alt=""
                      />
                    </Link>
                  }
                />

                <Subsection
                  markerPos={40}
                  leftContent={
                    <Link
                      href="https://cdn.sanity.io/images/3do82whm/next/16010730db213f3f7f4200b06ed84e54b7c33886-1439x764.png?rect=0,0,1438,764&w=800&h=425&fit=clip&auto=format"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ChakraImage
                        src="https://cdn.sanity.io/images/3do82whm/next/16010730db213f3f7f4200b06ed84e54b7c33886-1439x764.png?rect=0,0,1438,764&w=800&h=425&fit=clip&auto=format"
                        alt=""
                      />
                    </Link>
                  }
                  rightContent={
                    <Stack spacing={3} mt={{ lg: '4.5rem' }} h="full">
                      <Center
                        bgGradient="linear-gradient(to-br, orange.600, orange.400)"
                        w={12}
                        h={12}
                        rounded="lg"
                      >
                        <Icon as={FaCog} color="white" w={5} h={5} />
                      </Center>
                      <Heading as="h5" fontSize="xl" fontWeight="semibold">
                        Dynamically update your website
                      </Heading>
                      <Text color="gray.500" letterSpacing="wide">
                        Easily change metadata for your website, the color
                        palette, navigation, and much more.
                      </Text>
                    </Stack>
                  }
                />

                <Subsection
                  markerPos={40}
                  flipContentOnMobile
                  leftContent={
                    <Stack
                      spacing={3}
                      mt={{ lg: '4.5rem' }}
                      h="full"
                      alignItems={{ lg: 'flex-end' }}
                    >
                      <Center
                        bgGradient="linear-gradient(to-br, orange.600, orange.400)"
                        w={12}
                        h={12}
                        rounded="lg"
                      >
                        <Icon as={FaEye} color="white" w={5} h={5} />
                      </Center>
                      <Heading as="h5" fontSize="xl" fontWeight="semibold">
                        Custom content previews
                      </Heading>
                      <Text
                        color="gray.500"
                        letterSpacing="wide"
                        textAlign={{ lg: 'right' }}
                      >
                        Make sure your content looks the way you want it to
                        before publishing it.
                      </Text>
                    </Stack>
                  }
                  rightContent={
                    <Link
                      href="https://cdn.sanity.io/images/bmj8cwsg/production/afb24ff1a497bbc3f1aaaf6288842370a8048b80-1920x1080.png?w=1300&fit=max&auto=format"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ChakraImage
                        src="https://cdn.sanity.io/images/bmj8cwsg/production/afb24ff1a497bbc3f1aaaf6288842370a8048b80-1920x1080.png?w=1300&fit=max&auto=format"
                        alt=""
                      />
                    </Link>
                  }
                />
              </Box>
            </Stack>
          </Stack>
        </Container>

        <Container maxW="7xl" w="full">
          <Stack alignItems="center" w="full" spacing={8}>
            <LeadInHeading
              smallText="Customizable e-commerce platform"
              heading="Headless E-Commerce"
              icon={IoIosPaper}
              color={['cyan.600', 'cyan.400']}
            />
            <Stack alignItems="center" spacing={16} w="full">
              <Stack alignItems="center">
                <Heading as="h4" maxW="3xl" w="full" textAlign="center">
                  Start selling online
                </Heading>
                <Text
                  maxW="xl"
                  w="full"
                  fontSize="xl"
                  textAlign="center"
                  color="gray.500"
                >
                  Fully customizable e-commerce platform that looks and performs
                  the way you want it to.
                </Text>
              </Stack>
              <SplitSection
                containerStyle={{ maxW: '6xl', w: 'full', gap: 16 }}
              >
                <SplitSection.LeftContent>
                  <Stack spacing={12}>
                    <Link
                      href="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/136c87ca-091f-4095-b85f-219db073bfda.png"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ChakraImage
                        src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/136c87ca-091f-4095-b85f-219db073bfda.png"
                        alt=""
                      />
                    </Link>
                  </Stack>
                </SplitSection.LeftContent>
                <SplitSection.RightContent>
                  <Stack spacing={8} px={{ base: 4, md: 8 }}>
                    <Stack spacing={3}>
                      <Center
                        bgGradient="linear-gradient(to-br, cyan.600, cyan.400)"
                        w={12}
                        h={12}
                        rounded="lg"
                      >
                        <Icon as={FaDollarSign} color="white" w={5} h={5} />
                      </Center>
                      <Heading as="h5" fontSize="xl" fontWeight="semibold">
                        Choose the right plan for you*
                      </Heading>
                      <Text color="gray.500" letterSpacing="wide">
                        Get selling for 2.0% of sales or $299/mo. with a 0%
                        transaction fee up to $500k/yr., then 1.5%.
                      </Text>
                    </Stack>
                    <Stack spacing={3}>
                      <Center
                        bgGradient="linear-gradient(to-br, cyan.600, cyan.400)"
                        w={12}
                        h={12}
                        rounded="lg"
                      >
                        <Icon as={FaPlug} color="white" w={5} h={5} />
                      </Center>
                      <Heading as="h5" fontSize="xl" fontWeight="semibold">
                        40+ integrations
                      </Heading>
                      <Text color="gray.500" letterSpacing="wide">
                        Including Square, Stripe, PayPal, HubSpot, Mailchimp,
                        ShipStation, and Zapier.
                      </Text>
                    </Stack>
                    <Stack spacing={3}>
                      <Center
                        bgGradient="linear-gradient(to-br, cyan.600, cyan.400)"
                        w={12}
                        h={12}
                        rounded="lg"
                      >
                        <Icon as={FaUsers} color="white" w={6} h={6} />
                      </Center>
                      <Heading as="h5" fontSize="xl" fontWeight="semibold">
                        Multiple user support
                      </Heading>
                      <Text color="gray.500" letterSpacing="wide">
                        Have a larger business? Add up to three* admin users to
                        your store to stay on top of things.
                      </Text>
                    </Stack>
                    <Text fontSize="sm" fontStyle="italic" color="gray.500">
                      *When using the Swell headless e-commerce platform.{' '}
                      <Link
                        href="https://www.swell.is"
                        target="_blank"
                        rel="noreferrer"
                        fontWeight="semibold"
                      >
                        Click to learn more about Swell.
                      </Link>
                    </Text>
                  </Stack>
                </SplitSection.RightContent>
              </SplitSection>
            </Stack>
          </Stack>
        </Container>

        {/* Main header container */}
        {/* <Container
          as={Stack}
          alignItems="center"
          position="relative"
          zIndex={1}
          pb={28}
          bg="gray.50"
          w="full"
          maxW="100vw"
        >
          <SplitSection
            containerStyle={{
              maxW: '8xl',
              w: 'full',
              gap: { base: 0, lg: 16 },
              mt: 16,
            }}
          >
            <SplitSection.LeftContent>
              <Box position="relative" w="full" h="full" minH={72}>
                <Image
                  src={webIllustration}
                  alt="A team building a website."
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </SplitSection.LeftContent>
            <SplitSection.RightContent>
              <Box py={28}>
                <Heading as="h1" fontWeight="black">
                  We&apos;re not like other web development companies.
                </Heading>
                <Stack mt={6} color="gray.600">
                  <Text>
                    Our websites are 100% custom and powered by React, a
                    technology created and maintained by Meta (formerly
                    Facebook) and used by companies such as Netflix, Instagram,
                    and PayPal.
                  </Text>
                  <Text>
                    Website builders like WordPress and Squarespace tend to come
                    with a lot of unnecessary overhead that slows websites down,
                    and they can also be buggy and more vulnerable to security
                    threats.
                  </Text>
                </Stack>
                <Button as={Link} href="/contact" mt={8} variant="primaryLink">
                  Contact Us
                </Button>
              </Box>
            </SplitSection.RightContent>
          </SplitSection>
        </Container> */}

        {/* Conversions card section */}
        {/* <Box position="relative" bg="brand.600" pb={40}>
          <AngleDivider
            style={{
              width: '100%',
              filter: 'drop-shadow(5px 0 5px #000000AA)',
            }}
          />
          <Container position="relative" zIndex={2} mt={-64}>
            <Box
              zIndex={2}
              mx="auto"
              maxW="xl"
              w="full"
              bg="brand.100"
              p={{ base: 4, md: 8 }}
              rounded="lg"
              shadow="lg"
            >
              <Heading as="h2">
                Don&apos;t miss conversions because of a slow website.
              </Heading>
              <Text>
                With our React-based websites, visitors will be less likely to
                click away because load times are much faster than WordPress.
              </Text>
              <Text
                mt={4}
                fontSize="xl"
                fontWeight="semibold"
                textTransform="uppercase"
                color="brand.600"
              >
                Did you know?
              </Text>
              <Text>
                Your conversion rate could drop 4.42% every second within the
                first five seconds of load time?
              </Text>
              <Text
                color="brand.400"
                fontWeight="semibold"
                fontSize="xs"
                mt={2}
              >
                Source:{' '}
                <Link
                  href="https://blog.hubspot.com/marketing/page-load-time-conversion-rates"
                  target="_blank"
                  rel="noreferrer"
                >
                  HubSpot
                </Link>
              </Text>
            </Box>
          </Container>
          <Stack
            alignItems="center"
            maxW="2xl"
            w="full"
            mx="auto"
            mt={32}
            color="brand.300"
          >
            <Heading
              as="h2"
              textTransform="uppercase"
              color="brand.300"
              textAlign="center"
            >
              <chakra.span fontWeight="black" color="white">
                What
              </chakra.span>{' '}
              we do
            </Heading>
            <Text textAlign="center">
              Whether you need a website to showcase your portfolio, to
              represent and generate leads for your business, run an e-commerce
              store, or run a blog, we ensure your visitors have the best
              experience possible.
            </Text>
          </Stack>
        </Box> */}

        {/* <Box position="relative" mt={-24}>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            w="full"
            gap={16}
            maxW="6xl"
            mx="auto"
            placeItems="center"
            alignItems="stretch"
          >
            <FeatureCardIcon
              icon={FaDesktop}
              heading="Web Design and Development"
              description="We have custom-built templates or can design you a site from
              scratch."
            />
            <FeatureCardIcon
              icon={MdDevices}
              heading="Responsiveness, SEO, & Accessibility"
              description="Your website will adapt to any screen size and look great, rank
              high on search engines, and be accessible to everyone regardless
              of disability."
            />
            <FeatureCardIcon
              icon={HiOutlinePuzzle}
              heading="Business Solutions"
              description="No matter how you need, or want, to manage your content, we can
              build a custom solution that fits your business needs."
            />
          </SimpleGrid>
        </Box> */}

        {/* Basic pricing section */}
        <Container w="full" maxW="8xl">
          <SplitSection containerStyle={{ mt: 28, mx: 'auto' }}>
            <SplitSection.LeftContent>
              <Heading as="h2">
                Get a website for{' '}
                <chakra.span color="brand.500" fontWeight="black">
                  $0
                </chakra.span>{' '}
                down and{' '}
                <chakra.span color="brand.500" fontWeight="black">
                  $150
                </chakra.span>{' '}
                per month.
              </Heading>
              <Text color="gray.600">
                If your business just needs an online presence, we offer a
                simple package that gives you everything you need to get online
                and stay online. By providing your own content, this package
                keeps your costs low. However, addons are available if you need
                them.
              </Text>
              <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} mt={8}>
                <IconFeature
                  headingAs="h3"
                  icon={FaCheck}
                  heading="Website template"
                  description="Choose one of our beautiful, high performance templates and
                    provide content for up to 5 pages."
                />
                <IconFeature
                  headingAs="h3"
                  icon={FaCheck}
                  heading="Responsive design"
                  description="We make sure your site looks great on mobile devices, desktop devices, and everything in between."
                />
                <IconFeature
                  headingAs="h3"
                  icon={FaCheck}
                  heading="Unlimited content updates"
                  description="Need to make a change to your content? Let us know and we'll take care of it the same day! Larger updates may take up to 24 hours."
                />
                <IconFeature
                  headingAs="h3"
                  icon={FaCheck}
                  heading="SEO and accessibility"
                  description="Help your page rank high in search engine results with crucial SEO and accessibility implementations."
                />
                <IconFeature
                  headingAs="h3"
                  icon={FaCheck}
                  heading="Hosting"
                  description="Free hosting with one of our hosting providers. Includes a free SSL certificate generated with Let's Encrypt."
                />
                <IconFeature
                  headingAs="h3"
                  icon={FaCheck}
                  heading="Google Maps"
                  description="Show your visitors where your business is located with an interactive map provided byy Google Maps."
                />
                <IconFeature
                  headingAs="h3"
                  icon={FaCheck}
                  heading="24/7 maintenance and support"
                  description="We're available at any time to provide service. We will also perform maintenance when necessary, such as patching security vulnerabilities."
                />
                <IconFeature
                  headingAs="h3"
                  icon={FaCheck}
                  heading="Custom contact form"
                  description="Let users provide your business with the information you need. We'll make sure it gets to your inbox."
                />
              </SimpleGrid>
            </SplitSection.LeftContent>
            <SplitSection.RightContent>
              <Box position="relative" w="full" h="full" minH={72}>
                <Image
                  src={paymentIllustration}
                  alt="A team building a website."
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </SplitSection.RightContent>
          </SplitSection>
          <Stack
            mt={8}
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="center"
            gap={4}
          >
            <Text fontSize="2xl" fontWeight="bold">
              Sound like what you need?
            </Text>
            <Button as="a" href="/contact" variant="primaryLink">
              Contact Now
            </Button>
            <Button as="a" href="/pricing" variant="secondaryLink">
              Other Options
            </Button>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Home;
