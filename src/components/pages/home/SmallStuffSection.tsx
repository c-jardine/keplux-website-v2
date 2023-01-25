import {
  AbsoluteCenter,
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaBolt } from '@react-icons/all-files/fa/FaBolt';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import cls from '../../../../public/images/cumulative-layout-shift-optimization-demo.jpg';
import mobileAppIcon from '../../../../public/images/website-mobile-app-icon.jpg';
import mobileUi from '../../../../public/images/website-mobile-ui.png';
import { KLightbox } from '../../core';
import { LeadInHeading, Subsection } from '../../sections';

const SmallStuffSection = () => {
  return (
    <Container maxW="7xl" w="full">
      <Stack alignItems="center" w="full" spacing={8}>
        <LeadInHeading
          smallText="Why choose Keplux Development?"
          heading="Modern websites"
          icon={FaBolt}
          color={['#c026d3', '#e879f9']}
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
              We don&apos;t skip the small stuff overlooked by other agencies.
            </Heading>
            <Text
              maxW="xl"
              w="full"
              fontSize="xl"
              textAlign="center"
              color="whiteAlpha.600"
            >
              We build websites so they fit in with the modern world and on any
              device, which means paying attention to small details.
            </Text>
          </Stack>

          <Box>
            <Subsection
              markerPos={40}
              isFirst
              flipContentOnMobile
              leftContent={
                <Stack spacing={8} justifyContent="center" h="full">
                  <Stack spacing={3}>
                    <Heading
                      as="h5"
                      fontSize="xl"
                      fontWeight="semibold"
                      color="whiteAlpha.800"
                    >
                      Automatically optimized images
                    </Heading>
                    <Text color="whiteAlpha.600" letterSpacing="wide">
                      If you&apos;re on a mobile device, you shouldn&apos;t be
                      served huge images that cause slow loading speeds. With
                      modern technology, your images are automatically
                      optimized.
                    </Text>
                    <Text color="whiteAlpha.600" letterSpacing="wide">
                      Your images are also automatically rendered in a way that
                      reduces layout shifting, which Google now uses as a metric
                      for SEO.
                    </Text>
                  </Stack>
                  <Button
                    variant="secondary"
                    as={Link}
                    href="https://web.dev/cls/"
                    target="_blank"
                    rel="noopener"
                    justifyContent="space-between"
                    alignItems="center"
                    w="full"
                  >
                    <Text fontSize="xs">Read more Cumulative Layout Shift</Text>
                    <Box position="relative">
                      <Icon
                        as={FaChevronRight}
                        w={3}
                        h={3}
                        color="whiteAlpha.800"
                      />
                    </Box>
                  </Button>
                </Stack>
              }
              rightContent={
                <Box position="relative">
                  <AbsoluteCenter w="85%" h="85%" zIndex={0}>
                    <Box
                      h="full"
                      bgGradient="linear-gradient(to-tl, pink.400, brand.600)"
                      filter="blur(32px) brightness(150%)"
                      p={8}
                    />
                  </AbsoluteCenter>
                  <Box
                    position="relative"
                    borderRadius="lg"
                    overflow="hidden"
                    filter="saturate(0.65)"
                    _hover={{
                      filter: 'saturate(1)',
                    }}
                    transition="200ms ease-in-out"
                    shadow="dark-lg"
                  >
                    <KLightbox
                      image={cls}
                      alt="Content management system interface showing the management of a website's metadata, colors, and navigation."
                    />
                  </Box>
                </Box>
              }
            />

            <Subsection
              markerPos={40}
              leftContent={
                <Stack alignItems={{ lg: 'flex-end' }}>
                  <Box position="relative" w={{ md: '50%' }}>
                    <AbsoluteCenter w="50%" h="70%" zIndex={0}>
                      <Box
                        h="full"
                        bgGradient="linear-gradient(to-br, pink.400, brand.600)"
                        filter="blur(32px) brightness(100%)"
                      />
                    </AbsoluteCenter>
                    <Box position="relative">
                      <KLightbox
                        image={mobileUi}
                        alt="Content management system interface showing the management of movies, actors, and screenings."
                      />
                    </Box>
                  </Box>
                </Stack>
              }
              rightContent={
                <Stack spacing={8} h="full" justifyContent="center">
                  <Stack spacing={3}>
                    <Heading
                      as="h5"
                      fontSize="xl"
                      fontWeight="semibold"
                      color="whiteAlpha.800"
                    >
                      Background matching on surrounding UI
                    </Heading>
                    <Text color="whiteAlpha.600" letterSpacing="wide">
                      Changing your browser&apos;s surrounding UI color can make
                      a website look sleeker and more cohesive. We can make it
                      match any color you&apos;d like!
                    </Text>
                    <Text
                      color="whiteAlpha.600"
                      letterSpacing="wide"
                      fontSize="sm"
                      fontStyle="italic"
                    >
                      Note: Firefox and Opera have not yet implemented this
                      functionality.
                    </Text>
                  </Stack>
                </Stack>
              }
            />

            <Subsection
              markerPos={40}
              flipContentOnMobile
              leftContent={
                <Stack spacing={8} justifyContent="center" h="full">
                  <Stack spacing={3}>
                    <Heading
                      as="h5"
                      fontSize="xl"
                      fontWeight="semibold"
                      color="whiteAlpha.800"
                    >
                      Custom app icon
                    </Heading>
                    <Text color="whiteAlpha.600" letterSpacing="wide">
                      If users want to add your website or web app to their home
                      screen, the icon is automatically generated. However,
                      there are under-utilized tools that make this generation
                      customizable.
                    </Text>
                    <Text color="whiteAlpha.600" letterSpacing="wide">
                      We&apos;ll make sure your icons look great on iOS,
                      Android, and even Windows start menu tiles!
                    </Text>
                  </Stack>
                </Stack>
              }
              rightContent={
                <Box position="relative" w="75%">
                  <AbsoluteCenter w="85%" h="85%" zIndex={0}>
                    <Box
                      h="full"
                      bgGradient="linear-gradient(to-br, orange.400, brand.600)"
                      filter="blur(32px) brightness(150%)"
                      p={8}
                    />
                  </AbsoluteCenter>
                  <Box
                    position="relative"
                    rounded="lg"
                    overflow="hidden"
                    filter="saturate(0.65)"
                    _hover={{
                      filter: 'saturate(1)',
                    }}
                    transition="200ms ease-in-out"
                    shadow="dark-lg"
                  >
                    <KLightbox
                      image={mobileAppIcon}
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
  );
};

export default SmallStuffSection;
