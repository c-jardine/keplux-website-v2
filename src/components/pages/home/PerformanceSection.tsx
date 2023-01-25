import {
  Center,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaBolt } from '@react-icons/all-files/fa/FaBolt';
import { FaChartLine } from '@react-icons/all-files/fa/FaChartLine';
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { LighthouseScore } from '../../core';
import { LeadInHeading, SplitSection } from '../../sections';

const PerformanceSection = () => {
  return (
    <Container maxW="7xl" w="full">
      <Stack alignItems="center" w="full" spacing={8}>
        <LeadInHeading
          smallText="Blazing fast websites"
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
              The longer your website takes to load, the sooner your visitors
              will leave. That shouldn&apos;t happen.
            </Text>
          </Stack>
          <SplitSection containerStyle={{ maxW: '6xl', w: 'full', gap: 16 }}>
            <SplitSection.LeftContent>
              <Stack spacing={16} justifyContent="center" h="full">
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
                  bgGradient="linear-gradient(to-br, pink.400, brand.600)"
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
                    <Icon as={FaChartLine} color="whiteAlpha.900" w={6} h={6} />
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
                    We catch performance issues quickly, eliminating bottlenecks
                    and ensuring your website is as fast as possible.
                  </Text>
                </Stack>
              </Stack>
            </SplitSection.RightContent>
          </SplitSection>
        </Stack>
      </Stack>
    </Container>
  );
};

export default PerformanceSection;
