import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Image as ChakraImage,
  Container,
  HStack,
  Heading,
  Icon,
  Link,
  Stack,
  StackDivider,
  Text,
  Tooltip,
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
import { NextSeo } from 'next-seo';
import { KLink, LighthouseScore } from '../src/components/core';
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
              <Button as={Link} href="/contact" variant="primary">
                Start your project
              </Button>
              <Button as={Link} href="/pricing" variant="secondary">
                View pricing
              </Button>
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
                        <Icon as={FaTrash} color="whiteAlpha.900" w={5} h={5} />
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
                        <Icon
                          as={FaChartLine}
                          color="whiteAlpha.900"
                          w={6}
                          h={6}
                        />
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
                          <Icon
                            as={CgListTree}
                            color="whiteAlpha.900"
                            w={5}
                            h={5}
                          />
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
                      <KLink
                        href="https://cdn.sanity.io/images/3do82whm/next/ba70e2ccf32f958597d1f5ad5d97a91643618340-1397x966.png?w=800&h=553&fit=clip&auto=format"
                        target="_blank"
                        rel="noreferrer"
                        position="relative"
                      >
                        <ChakraImage
                          src="https://cdn.sanity.io/images/3do82whm/next/ba70e2ccf32f958597d1f5ad5d97a91643618340-1397x966.png?w=800&h=553&fit=clip&auto=format"
                          alt=""
                        />
                      </KLink>
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
                      <KLink
                        href="https://cdn.sanity.io/images/3do82whm/next/16010730db213f3f7f4200b06ed84e54b7c33886-1439x764.png?rect=0,0,1438,764&w=800&h=425&fit=clip&auto=format"
                        target="_blank"
                        rel="noreferrer"
                        position="relative"
                      >
                        <ChakraImage
                          src="https://cdn.sanity.io/images/3do82whm/next/16010730db213f3f7f4200b06ed84e54b7c33886-1439x764.png?rect=0,0,1438,764&w=800&h=425&fit=clip&auto=format"
                          alt=""
                        />
                      </KLink>
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
                        <Icon as={FaEye} color="whiteAlpha.900" w={5} h={5} />
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
                    <Box position="relative">
                      <AbsoluteCenter w="85%" h="85%" zIndex={0}>
                        <Box
                          h="full"
                          bgGradient="linear-gradient(to-br, orange.400, brand.600)"
                          filter="blur(32px) brightness(150%)"
                          p={8}
                        />
                      </AbsoluteCenter>
                      <KLink
                        href="https://cdn.sanity.io/images/bmj8cwsg/production/afb24ff1a497bbc3f1aaaf6288842370a8048b80-1920x1080.png?w=1300&fit=max&auto=format"
                        target="_blank"
                        rel="noreferrer"
                        position="relative"
                      >
                        <ChakraImage
                          src="https://cdn.sanity.io/images/bmj8cwsg/production/afb24ff1a497bbc3f1aaaf6288842370a8048b80-1920x1080.png?w=1300&fit=max&auto=format"
                          alt=""
                        />
                      </KLink>
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
                <Heading as="h4" maxW="3xl" w="full" textAlign="center">
                  Customizable e-commerce platform
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
                  <Box position="relative">
                    <AbsoluteCenter w="85%" h="85%" zIndex={0}>
                      <Box
                        h="full"
                        bgGradient="linear-gradient(to-br, cyan.600, #e879f9)"
                        filter="blur(32px) brightness(150%)"
                        p={8}
                      />
                    </AbsoluteCenter>
                    <KLink
                      href="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/136c87ca-091f-4095-b85f-219db073bfda.png"
                      target="_blank"
                      rel="noreferrer"
                      position="relative"
                    >
                      <ChakraImage
                        src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/136c87ca-091f-4095-b85f-219db073bfda.png"
                        alt=""
                      />
                    </KLink>
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
                        <Icon as={FaPlug} color="whiteAlpha.900" w={5} h={5} />
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
                        <Icon as={FaUsers} color="whiteAlpha.900" w={6} h={6} />
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
                  <Heading as="h4" maxW="3xl" w="full" textAlign="center">
                    We&apos;ll manage everything for you
                  </Heading>
                  <Text
                    maxW="xl"
                    w="full"
                    fontSize="xl"
                    textAlign="center"
                    color="gray.500"
                  >
                    Choose a monthly plan and let us handle everything for you,
                    giving you more time to focus on your business.
                  </Text>
                </Stack>
                <HStack spacing={4}>
                  <Tooltip label="Pay a 50% retainer and we'll be in touch with the next steps.">
                    <Button
                      as={Link}
                      href="https://buy.stripe.com/cN2g0r2PYeRI0Zq145"
                      target="_blank"
                      rel="noopener"
                      bg="#d946ef"
                      color="white"
                      transition="200ms ease-in-out"
                      _hover={{
                        textDecoration: 'none',
                        filter: 'brightness(110%)',
                      }}
                      gap={4}
                    >
                      Buy now
                    </Button>
                  </Tooltip>
                  <Button as={Link} href="/pricing" variant="secondary">
                    View other options
                  </Button>
                </HStack>
              </Stack>
              <Center
                w="100vw"
                bg="white"
                py={8}
                borderTopWidth={1}
                borderBottomWidth={1}
                borderColor="gray.300"
              >
                <Stack
                  direction={{ base: 'column', lg: 'row' }}
                  divider={<StackDivider borderColor="gray.200" />}
                >
                  <Stack
                    alignItems="center"
                    px={{ lg: 16 }}
                    py={{ base: 8, lg: 0 }}
                  >
                    <Text fontWeight="black" fontSize="4xl" lineHeight={1}>
                      $0
                    </Text>
                    <Text
                      textTransform="uppercase"
                      letterSpacing="wide"
                      fontWeight="bold"
                      color="gray.500"
                    >
                      down
                    </Text>
                  </Stack>
                  <Stack
                    alignItems="center"
                    px={{ lg: 16 }}
                    py={{ base: 8, lg: 0 }}
                  >
                    <Text fontWeight="black" fontSize="4xl" lineHeight={1}>
                      $150
                    </Text>
                    <Text
                      textTransform="uppercase"
                      letterSpacing="wide"
                      fontWeight="bold"
                      color="gray.500"
                    >
                      per month
                    </Text>
                  </Stack>
                  <Stack
                    alignItems="center"
                    px={{ lg: 16 }}
                    py={{ base: 8, lg: 0 }}
                  >
                    <Text fontWeight="black" fontSize="4xl" lineHeight={1}>
                      No contract
                    </Text>
                    <Text
                      textTransform="uppercase"
                      letterSpacing="wide"
                      fontWeight="bold"
                      color="gray.500"
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
                          >
                            {feature.heading}
                          </Text>
                          <Text
                            color="gray.500"
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
                          >
                            {feature.heading}
                          </Text>
                          <Text color="gray.500" letterSpacing="wide">
                            {feature.description}
                          </Text>
                        </Box>
                      )
                    }
                  />
                ))}
              </Stack>
              <HStack spacing={4}>
                <Tooltip label="Pay a 50% retainer and we'll be in touch with the next steps.">
                  <Button
                    as={Link}
                    href="https://buy.stripe.com/cN2g0r2PYeRI0Zq145"
                    target="_blank"
                    rel="noopener"
                    bg="#d946ef"
                    color="white"
                    transition="200ms ease-in-out"
                    _hover={{
                      textDecoration: 'none',
                      filter: 'brightness(110%)',
                    }}
                    gap={4}
                  >
                    Buy now
                  </Button>
                </Tooltip>
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
