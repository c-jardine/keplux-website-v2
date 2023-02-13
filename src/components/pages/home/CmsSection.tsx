import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { CgListTree } from '@react-icons/all-files/cg/CgListTree';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { FaCog } from '@react-icons/all-files/fa/FaCog';
import { FaEye } from '@react-icons/all-files/fa/FaEye';
import { IoIosPaper } from '@react-icons/all-files/io/IoIosPaper';
import Link from 'next/link';
import cmsLivePreview from '../../../../public/images/content-management-live-preview.png';
import cmsMetadata from '../../../../public/images/content-management-metadata.png';
import cmsMovies from '../../../../public/images/content-management-movies.png';
import { KLightbox } from '../../core';
import { LeadInHeading, Subsection } from '../../sections';
import { motion } from 'framer-motion';

const CmsSection = () => {
  return (
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
                  <Stack spacing={3} justifyContent="center" h="full">
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
                    <Text color="whiteAlpha.600" letterSpacing="wide">
                      Whatever the content is, it&apos;s easy to create, update,
                      remove, collaborate, and revert to previous states.
                    </Text>
                  </Stack>
                  <Button
                    variant="secondary"
                    as={Link}
                    href="https://www.sanity.io/structured-content"
                    target="_blank"
                    rel="noopener"
                    justifyContent="space-between"
                    alignItems="center"
                    w="full"
                  >
                    <Text fontSize="xs">
                      Read more about structured content
                    </Text>
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
                      bgGradient="linear-gradient(to-br, orange.400, brand.600)"
                      filter="blur(32px) brightness(150%)"
                      p={8}
                    />
                  </AbsoluteCenter>
                  <Box
                    as={motion.div}
                    position="relative"
                    borderRadius="lg"
                    overflow="hidden"
                    filter="saturate(0.65)"
                    shadow="dark-lg"
                    whileHover={{
                      scale: 1.05,
                      filter: 'saturate(1)',
                      transition: {
                        duration: 0.2,
                        easings: 'cubic-bezier(0.17, 0.55, 0.55, 1)',
                      },
                    }}
                    whileTap={{ scale: 0.975 }}
                  >
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
                  <Box
                    as={motion.div}
                    position="relative"
                    borderRadius="lg"
                    overflow="hidden"
                    filter="saturate(0.65)"
                    shadow="dark-lg"
                    whileHover={{
                      scale: 1.05,
                      filter: 'saturate(1)',
                      transition: {
                        duration: 0.2,
                        easings: 'cubic-bezier(0.17, 0.55, 0.55, 1)',
                      },
                    }}
                    whileTap={{ scale: 0.975 }}
                  >
                    <KLightbox
                      image={cmsMetadata}
                      alt="Content management system interface showing the management of a website's metadata, colors, and navigation."
                    />
                  </Box>
                </Box>
              }
              rightContent={
                <Stack spacing={3} justifyContent="center" h="full">
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
                    Easily change metadata for your website, the color palette,
                    navigation, and much more.
                  </Text>
                </Stack>
              }
            />

            <Subsection
              markerPos={40}
              flipContentOnMobile
              leftContent={
                <Stack spacing={3} justifyContent="center" h="full">
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
                  <Text color="whiteAlpha.600" letterSpacing="wide">
                    Make sure your content looks the way you want it to before
                    publishing it.
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
                  <Box
                    as={motion.div}
                    position="relative"
                    borderRadius="lg"
                    overflow="hidden"
                    filter="saturate(0.65)"
                    shadow="dark-lg"
                    whileHover={{
                      scale: 1.05,
                      filter: 'saturate(1)',
                      transition: {
                        duration: 0.2,
                        easings: 'cubic-bezier(0.17, 0.55, 0.55, 1)',
                      },
                    }}
                    whileTap={{ scale: 0.975 }}
                  >
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
  );
};

export default CmsSection;
