import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaCogs } from '@react-icons/all-files/fa/FaCogs';
import { FaServer } from '@react-icons/all-files/fa/FaServer';
import { IoMdStats } from '@react-icons/all-files/io/IoMdStats';
import { MdRefresh } from '@react-icons/all-files/md/MdRefresh';
import { Parallax } from 'react-scroll-parallax';
import { IconHeader, KLink } from '../../core';
import { SplitSection } from '../../sections';

const Features = () => {
  return (
    <Box w="full" position="relative" zIndex={1}>
      <Container id="hosting" w="full" maxW="7xl">
        <SplitSection containerStyle={{ gap: 8 }}>
          <SplitSection.LeftContent>
            <Box>
              <Heading as="h2" fontWeight="black">
                Get your website online
              </Heading>
              <Stack mt={6} color="gray.600">
                <Text>
                  With our{' '}
                  <KLink
                    href="/pricing"
                    color="brand.600"
                    fontWeight="semibold"
                  >
                    Keplux One
                  </KLink>{' '}
                  package, we make sure your website gets online and stays
                  online. We handle everything, letting you focus on running
                  your business.
                </Text>
                <Text>
                  Custom projects are also eligible for this service. We
                  don&apos;t offer these services for existing projects not
                  developed by us.
                </Text>
              </Stack>
            </Box>
          </SplitSection.LeftContent>
          <SplitSection.RightContent>
            <SimpleGrid columns={{ base: 1, xl: 2 }} gap={8}>
              <Parallax opacity={[0, 3]}>
                <Stack
                  position="relative"
                  id="hosting"
                  scrollMarginTop={20}
                  bg="white"
                  p={{ base: 4, md: 8 }}
                  rounded="lg"
                  w="full"
                  h={{ xl: 'calc(100% - 2rem)' }}
                  shadow="lg"
                  borderBottomWidth={5}
                  borderColor="brand.600"
                >
                  <Box pl={4} pt={4}>
                    <IconHeader icon={FaServer} />
                  </Box>
                  <Heading as="h3" size="sm" pt={8} textTransform="uppercase">
                    Hosting
                  </Heading>
                  <Stack color="gray.600" fontSize="sm">
                    <Text>
                      To access your website, you need a hosting provider. There
                      are tons of options and considerations, but we make it
                      easy by handling it for you. Our hosting scales with your
                      business.
                    </Text>
                  </Stack>
                </Stack>
              </Parallax>

              <Parallax opacity={[0, 3]}>
                <Stack
                  position="relative"
                  id="maintenance"
                  scrollMarginTop={20}
                  bg="white"
                  p={{ base: 4, md: 8 }}
                  rounded="lg"
                  w="full"
                  mt={{ xl: 8 }}
                  shadow="lg"
                  borderBottomWidth={5}
                  borderColor="brand.600"
                >
                  <Box pl={4} pt={4}>
                    <IconHeader icon={MdRefresh} />
                  </Box>
                  <Heading as="h3" size="sm" pt={8} textTransform="uppercase">
                    Updates
                  </Heading>
                  <Stack color="gray.600" fontSize="sm">
                    <Text>
                      With the Keplux One package, there are a variety of
                      updates we can perform for you. Some are automatic, others
                      are at your request. Our goal is to let you focus on your
                      business while we handle your website.
                    </Text>
                  </Stack>
                </Stack>
              </Parallax>

              <Parallax opacity={[0, 3]}>
                <Stack
                  position="relative"
                  id="maintenance"
                  scrollMarginTop={20}
                  bg="white"
                  p={{ base: 4, md: 8 }}
                  rounded="lg"
                  w="full"
                  mt={{ xl: -8 }}
                  h={{ xl: 'full' }}
                  shadow="lg"
                  borderBottomWidth={5}
                  borderColor="brand.600"
                >
                  <Box pl={4} pt={4}>
                    <IconHeader icon={FaCogs} />
                  </Box>
                  <Heading as="h3" size="sm" pt={8} textTransform="uppercase">
                    Maintenance
                  </Heading>
                  <Stack color="gray.600" fontSize="sm">
                    <Text>
                      Websites aren&apos;t something you want to set up and
                      forget. Over time, technologies can become vulnerable to
                      security threats and need to be patched--but that&apos;s
                      not all.
                    </Text>
                  </Stack>
                </Stack>
              </Parallax>

              <Parallax opacity={[0, 3]}>
                <Stack
                  position="relative"
                  id="analytics"
                  scrollMarginTop={20}
                  bg="white"
                  p={{ base: 4, md: 8 }}
                  rounded="lg"
                  w="full"
                  mt={{ xl: 0 }}
                  shadow="lg"
                  borderBottomWidth={5}
                  borderColor="brand.600"
                >
                  <Box pl={4} pt={4}>
                    <IconHeader icon={IoMdStats} />
                  </Box>
                  <Heading as="h3" size="sm" pt={8} textTransform="uppercase">
                    Analytics
                  </Heading>
                  <Stack color="gray.600" fontSize="sm">
                    <Text>
                      Google Analytics provides useful insights about your
                      website&apos;s traffic and engagement. We&apos;ll include
                      it in every Keplux One project, or you can add it to a
                      custom package for a small fee.
                    </Text>
                  </Stack>
                </Stack>
              </Parallax>
            </SimpleGrid>
          </SplitSection.RightContent>
        </SplitSection>
      </Container>
    </Box>
  );
};

export default Features;
