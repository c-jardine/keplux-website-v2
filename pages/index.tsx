import cmsLivePreview from '../public/images/content-management-live-preview.png';
import cmsMetadata from '../public/images/content-management-metadata.png';
import cmsMovies from '../public/images/content-management-movies.png';
import swellOrders from '../public/images/swell-ecommerce-orders.png';

import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Container,
  HStack,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { CgListTree } from '@react-icons/all-files/cg/CgListTree';
import { FaBolt } from '@react-icons/all-files/fa/FaBolt';
import { FaCalendarAlt } from '@react-icons/all-files/fa/FaCalendarAlt';
import { FaChartLine } from '@react-icons/all-files/fa/FaChartLine';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { FaCog } from '@react-icons/all-files/fa/FaCog';
import { FaDollarSign } from '@react-icons/all-files/fa/FaDollarSign';
import { FaEye } from '@react-icons/all-files/fa/FaEye';
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe';
import { FaPlug } from '@react-icons/all-files/fa/FaPlug';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import { IoIosPaper } from '@react-icons/all-files/io/IoIosPaper';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { MdSettings } from '@react-icons/all-files/md/MdSettings';
import { MdStore } from '@react-icons/all-files/md/MdStore';
import { MdWeb } from '@react-icons/all-files/md/MdWeb';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import headerImg from '../public/backgrounds/web-development.jpg';
import {
  BasicCard,
  KLightbox,
  KLink,
  LighthouseScore,
} from '../src/components/core';
import {
  LeadInHeading,
  SplitSection,
  Subsection,
} from '../src/components/sections';
import { StarterPricing } from '../src/lib/pricing';

const Home = () => {
  return (
    <>
      <NextSeo
        title="Web development in Toledo, OH"
        description="Websites built with modern technologies, resulting in lightning performance, amazing SEO, and more conversions."
        canonical="https://www.keplux.com"
      />
      <Stack alignItems="center" spacing={16}>
        <Box position="relative" w="full">
          <Box w="full" mt={-32}>
            <Box position="relative" maxW="1920px" w="full">
              <Image
                src={headerImg}
                alt=""
                fill
                style={{ objectFit: 'cover', opacity: 0.5 }}
              />
              <Box
                position="absolute"
                w="full"
                h="full"
                bg="brand.900"
                opacity={0.9}
              />
              <Container position="relative" maxW="7xl" w="full">
                <Stack alignItems="center" spacing={12} pt={32} pb={64}>
                  <Stack alignItems="center">
                    <Heading
                      as="h1"
                      fontSize={['5xl', , '6xl', '7xl']}
                      fontWeight="black"
                      textAlign="center"
                      color="whiteAlpha.800"
                    >
                      Toledo Web Design and Development
                    </Heading>
                    <Heading
                      as="h2"
                      maxW="2xl"
                      w="full"
                      fontSize="xl"
                      textAlign="center"
                      fontWeight="medium"
                      color="whiteAlpha.800"
                    >
                      At Keplux Development, we build websites with modern
                      technologies and strategies that give your website
                      lightning fast performance and SEO that helps boost
                      conversions.
                    </Heading>
                  </Stack>
                  <HStack spacing={4}>
                    <Button as={Link} href="/contact" variant="primary">
                      Start your project
                    </Button>
                    <Button as={Link} href="/pricing" variant="secondary">
                      View pricing
                    </Button>
                  </HStack>
                </Stack>
              </Container>
            </Box>
          </Box>

          <Container maxW="8xl" w="full" mt={-32}>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={16}>
              <BasicCard
                icon={MdWeb}
                title="Website design and development"
                body="Our custom websites are designed to look great on any device
                    and developed to rank high on search engines."
              />
              <BasicCard
                icon={MdStore}
                title="Web apps and ecommerce"
                body="We build custom web apps, allowing you to manage your business
                  how you want, including ecommerce and content management."
              />
              <BasicCard
                icon={MdSearch}
                title="Search engine optimization"
                body="In-depth, on-page SEO helps your website rank high on search
                  engines. Included in every plan or package!"
              />
              <BasicCard
                icon={MdSettings}
                title="Website hosting and maintenance"
                body="If you need your website hosted, managed, and kept up to date,
                  add this service to your plan and we'll handle it!"
              />
            </SimpleGrid>
          </Container>
        </Box>

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
                <Heading
                  as="h4"
                  maxW="3xl"
                  w="full"
                  textAlign="center"
                  color="whiteAlpha.800"
                >
                  Don&apos;t miss out on conversions because of a slow website.
                </Heading>
                <Text
                  maxW="xl"
                  w="full"
                  fontSize="xl"
                  textAlign="center"
                  color="whiteAlpha.600"
                >
                  The longer your website takes to load, the sooner your
                  visitors will leave. That shouldn&apos;t happen.
                </Text>
              </Stack>
              <SplitSection
                containerStyle={{ maxW: '6xl', w: 'full', gap: 16 }}
              >
                <SplitSection.LeftContent>
                  <Stack spacing={16}>
                    <LighthouseScore
                      heading="Keplux Development"
                      performance={96}
                      accessibility={98}
                      bestPractices={100}
                      seo={100}
                    />
                    <LighthouseScore
                      heading="WordPress"
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
                        <Icon as={FaGlobe} color="whiteAlpha.900" w={5} h={5} />
                      </Center>
                      <Heading
                        as="h5"
                        fontSize="xl"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                      >
                        Websites built with the power of React
                      </Heading>
                      <Text color="whiteAlpha.600" letterSpacing="wide">
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
                        <Icon as={FaTrash} color="whiteAlpha.900" w={5} h={5} />
                      </Center>
                      <Heading
                        as="h5"
                        fontSize="xl"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                      >
                        No unnecessary packages or plugins
                      </Heading>
                      <Text color="whiteAlpha.600" letterSpacing="wide">
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
                        <Icon
                          as={FaChartLine}
                          color="whiteAlpha.900"
                          w={6}
                          h={6}
                        />
                      </Center>
                      <Heading
                        as="h5"
                        fontSize="xl"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                      >
                        Performance monitoring throughout development
                      </Heading>
                      <Text color="whiteAlpha.600" letterSpacing="wide">
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
                <Heading
                  as="h4"
                  maxW="3xl"
                  w="full"
                  textAlign="center"
                  color="whiteAlpha.800"
                >
                  Manage your content any way you want
                </Heading>
                <Text
                  maxW="xl"
                  w="full"
                  fontSize="xl"
                  textAlign="center"
                  color="whiteAlpha.600"
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
                          <Icon
                            as={CgListTree}
                            color="whiteAlpha.900"
                            w={5}
                            h={5}
                          />
                        </Center>
                        <Heading
                          as="h5"
                          fontSize="xl"
                          fontWeight="semibold"
                          color="whiteAlpha.800"
                        >
                          Structured content matching your workflow
                        </Heading>
                        <Text
                          color="whiteAlpha.600"
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
                        rel="noopener"
                        justifyContent="space-between"
                        w="full"
                      >
                        <Text>Read more about structured content</Text>
                        <Icon as={FaChevronRight} color="orange.500" />
                      </Button>
                    </Stack>
                  }
                  rightContent={
                    <Box position="relative">
                      <AbsoluteCenter w="85%" h="85%" zIndex={0}>
                        <Box
                          h="full"
                          bgGradient="linear-gradient(to-br, orange.400, brand.600)"
                          filter="blur(32px) brightness(150%)"
                          p={8}
                        />
                      </AbsoluteCenter>
                      <Box position="relative">
                        <KLightbox
                          image={cmsMovies}
                          alt="Content management system interface showing the management of movies, actors, and screenings."
                        />
                      </Box>
                    </Box>
                  }
                />

                <Subsection
                  markerPos={40}
                  leftContent={
                    <Box position="relative">
                      <AbsoluteCenter w="85%" h="85%" zIndex={0}>
                        <Box
                          h="full"
                          bgGradient="linear-gradient(to-tl, orange.400, brand.600)"
                          filter="blur(32px) brightness(150%)"
                          p={8}
                        />
                      </AbsoluteCenter>
                      <Box position="relative">
                        <KLightbox
                          image={cmsMetadata}
                          alt="Content management system interface showing the management of a website's metadata, colors, and navigation."
                        />
                      </Box>
                    </Box>
                  }
                  rightContent={
                    <Stack spacing={3} mt={{ lg: '4.5rem' }} h="full">
                      <Center
                        bgGradient="linear-gradient(to-br, orange.600, orange.400)"
                        w={12}
                        h={12}
                        rounded="lg"
                      >
                        <Icon as={FaCog} color="whiteAlpha.900" w={5} h={5} />
                      </Center>
                      <Heading
                        as="h5"
                        fontSize="xl"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                      >
                        Dynamically update your website
                      </Heading>
                      <Text color="whiteAlpha.600" letterSpacing="wide">
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
                        <Icon as={FaEye} color="whiteAlpha.900" w={5} h={5} />
                      </Center>
                      <Heading
                        as="h5"
                        fontSize="xl"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                      >
                        Custom content previews
                      </Heading>
                      <Text
                        color="whiteAlpha.600"
                        letterSpacing="wide"
                        textAlign={{ lg: 'right' }}
                      >
                        Make sure your content looks the way you want it to
                        before publishing it.
                      </Text>
                    </Stack>
                  }
                  rightContent={
                    <Box position="relative">
                      <AbsoluteCenter w="85%" h="85%" zIndex={0}>
                        <Box
                          h="full"
                          bgGradient="linear-gradient(to-br, orange.400, brand.600)"
                          filter="blur(32px) brightness(150%)"
                          p={8}
                        />
                      </AbsoluteCenter>
                      <Box position="relative">
                        <KLightbox
                          image={cmsLivePreview}
                          alt="Content management system interface showing a live preview of a web page built with Sanity."
                        />
                      </Box>
                    </Box>
                  }
                />
              </Box>
            </Stack>
          </Stack>
        </Container>

        <Container maxW="7xl" w="full">
          <Stack alignItems="center" w="full" spacing={8}>
            <LeadInHeading
              smallText="Start selling online"
              heading="Headless E-Commerce"
              icon={IoIosPaper}
              color={['cyan.600', 'cyan.400']}
            />
            <Stack alignItems="center" spacing={16} w="full">
              <Stack alignItems="center">
                <Heading
                  as="h4"
                  maxW="3xl"
                  w="full"
                  textAlign="center"
                  color="whiteAlpha.800"
                >
                  Customizable e-commerce platform
                </Heading>
                <Text
                  maxW="xl"
                  w="full"
                  fontSize="xl"
                  textAlign="center"
                  color="whiteAlpha.600"
                >
                  Fully customizable e-commerce platform that looks and performs
                  the way you want it to.
                </Text>
              </Stack>
              <SplitSection
                containerStyle={{ maxW: '6xl', w: 'full', gap: 16 }}
              >
                <SplitSection.LeftContent>
                  <Box position="relative">
                    <AbsoluteCenter w="85%" h="85%" zIndex={0}>
                      <Box
                        h="full"
                        bgGradient="linear-gradient(to-br, cyan.600, #e879f9)"
                        filter="blur(32px) brightness(150%)"
                        p={8}
                      />
                    </AbsoluteCenter>
                    <Box position="relative">
                      <KLightbox
                        image={swellOrders}
                        alt="Swell e-commerce orders screen showing all recent orders, including paid, unpaid, refunded, and canceled orders. Also includes price paid, customer name, and fulfillment status."
                      />
                    </Box>
                  </Box>
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
                        <Icon
                          as={FaDollarSign}
                          color="whiteAlpha.900"
                          w={5}
                          h={5}
                        />
                      </Center>
                      <Heading
                        as="h5"
                        fontSize="xl"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                      >
                        Choose the right plan for you*
                      </Heading>
                      <Text color="whiteAlpha.600" letterSpacing="wide">
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
                        <Icon as={FaPlug} color="whiteAlpha.900" w={5} h={5} />
                      </Center>
                      <Heading
                        as="h5"
                        fontSize="xl"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                      >
                        40+ integrations
                      </Heading>
                      <Text color="whiteAlpha.600" letterSpacing="wide">
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
                        <Icon as={FaUsers} color="whiteAlpha.900" w={6} h={6} />
                      </Center>
                      <Heading
                        as="h5"
                        fontSize="xl"
                        fontWeight="semibold"
                        color="whiteAlpha.800"
                      >
                        Multiple user support
                      </Heading>
                      <Text color="whiteAlpha.600" letterSpacing="wide">
                        Have a larger business? Add up to three* admin users to
                        your store to stay on top of things.
                      </Text>
                    </Stack>
                    <Text
                      fontSize="sm"
                      fontStyle="italic"
                      color="whiteAlpha.600"
                    >
                      *When using the Swell headless e-commerce platform.{' '}
                      <KLink
                        href="https://www.swell.is"
                        target="_blank"
                        rel="noopener"
                        fontWeight="semibold"
                      >
                        Click to learn more about Swell.
                      </KLink>
                    </Text>
                  </Stack>
                </SplitSection.RightContent>
              </SplitSection>
            </Stack>
          </Stack>
        </Container>

        <Container maxW="7xl" w="full">
          <Stack alignItems="center" w="full" spacing={8}>
            <LeadInHeading
              smallText="Ideal solutions for small businesses"
              heading="Monthly Plans"
              icon={FaCalendarAlt}
              color={['#c026d3', '#e879f9']}
            />
            <Stack alignItems="center" spacing={16} w="full">
              <Stack alignItems="center" spacing={8}>
                <Stack>
                  <Heading
                    as="h4"
                    maxW="3xl"
                    w="full"
                    textAlign="center"
                    color="whiteAlpha.800"
                  >
                    We&apos;ll manage everything for you
                  </Heading>
                  <Text
                    maxW="xl"
                    w="full"
                    fontSize="xl"
                    textAlign="center"
                    color="whiteAlpha.600"
                  >
                    Choose a monthly plan and let us handle everything for you,
                    giving you more time to focus on your business.
                  </Text>
                </Stack>
                <HStack spacing={4}>
                  <Button
                    as={Link}
                    href="/contact"
                    target="_blank"
                    rel="noopener"
                    bg="#d946ef"
                    color="whiteAlpha.800"
                    transition="200ms ease-in-out"
                    _hover={{
                      textDecoration: 'none',
                      filter: 'brightness(110%)',
                    }}
                    gap={4}
                  >
                    Buy now
                  </Button>
                  <Button as={Link} href="/pricing" variant="secondary">
                    View other options
                  </Button>
                </HStack>
              </Stack>
              <Center
                w="100vw"
                bg="whiteAlpha.50"
                py={8}
                borderTopWidth={1}
                borderBottomWidth={1}
                borderColor="whiteAlpha.300"
              >
                <Stack
                  direction={{ base: 'column', lg: 'row' }}
                  divider={<StackDivider borderColor="whiteAlpha.300" />}
                >
                  <Stack
                    alignItems="center"
                    px={{ lg: 16 }}
                    py={{ base: 8, lg: 0 }}
                  >
                    <Text
                      fontWeight="black"
                      fontSize="4xl"
                      lineHeight={1}
                      color="whiteAlpha.800"
                    >
                      $0
                    </Text>
                    <Text
                      textTransform="uppercase"
                      letterSpacing="wide"
                      fontWeight="bold"
                      color="whiteAlpha.600"
                    >
                      down
                    </Text>
                  </Stack>
                  <Stack
                    alignItems="center"
                    px={{ lg: 16 }}
                    py={{ base: 8, lg: 0 }}
                  >
                    <Text
                      fontWeight="black"
                      fontSize="4xl"
                      lineHeight={1}
                      color="whiteAlpha.800"
                    >
                      $175
                    </Text>
                    <Text
                      textTransform="uppercase"
                      letterSpacing="wide"
                      fontWeight="bold"
                      color="whiteAlpha.600"
                    >
                      per month
                    </Text>
                  </Stack>
                  <Stack
                    alignItems="center"
                    px={{ lg: 16 }}
                    py={{ base: 8, lg: 0 }}
                  >
                    <Text
                      fontWeight="black"
                      fontSize="4xl"
                      lineHeight={1}
                      color="whiteAlpha.800"
                    >
                      No contract
                    </Text>
                    <Text
                      textTransform="uppercase"
                      letterSpacing="wide"
                      fontWeight="bold"
                      color="whiteAlpha.600"
                    >
                      required
                    </Text>
                  </Stack>
                </Stack>
              </Center>

              <Stack alignItems="center" w="full">
                <Text
                  textTransform="uppercase"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="whiteAlpha.600"
                >
                  What&apos;s included
                </Text>

                {StarterPricing.map((feature, index) => (
                  <Subsection
                    key={feature.id}
                    isFirst={index === 0}
                    small
                    markerPos="1.85rem"
                    leftContent={
                      index % 2 === 0 && (
                        <Stack
                          alignItems={
                            index % 2 === 0 ? { lg: 'flex-end' } : 'flex-start'
                          }
                        >
                          <Text
                            fontWeight="black"
                            fontSize="lg"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            color="whiteAlpha.800"
                          >
                            {feature.heading}
                          </Text>
                          <Text
                            color="whiteAlpha.600"
                            letterSpacing="wide"
                            textAlign={
                              index % 2 === 0 ? { lg: 'right' } : 'left'
                            }
                          >
                            {feature.description}
                          </Text>
                        </Stack>
                      )
                    }
                    rightContent={
                      index % 2 !== 0 && (
                        <Box>
                          <Text
                            fontWeight="black"
                            fontSize="lg"
                            textTransform="uppercase"
                            letterSpacing="wide"
                            color="whiteAlpha.800"
                          >
                            {feature.heading}
                          </Text>
                          <Text color="whiteAlpha.600" letterSpacing="wide">
                            {feature.description}
                          </Text>
                        </Box>
                      )
                    }
                  />
                ))}
              </Stack>
              <HStack spacing={4}>
                <Button
                  as={Link}
                  href="/contact"
                  target="_blank"
                  rel="noopener"
                  bg="#d946ef"
                  color="whiteAlpha.800"
                  transition="200ms ease-in-out"
                  _hover={{
                    textDecoration: 'none',
                    filter: 'brightness(110%)',
                  }}
                  gap={4}
                >
                  Buy now
                </Button>
                <Button as={Link} href="/pricing" variant="secondary">
                  View other options
                </Button>
              </HStack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Home;
