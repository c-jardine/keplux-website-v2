import {
  Box,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem as ChakraListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { FaCircle } from '@react-icons/all-files/fa/FaCircle';
import { FaCogs } from '@react-icons/all-files/fa/FaCogs';
import { FaServer } from '@react-icons/all-files/fa/FaServer';
import { IoMdStats } from '@react-icons/all-files/io/IoMdStats';
import { MdRefresh } from '@react-icons/all-files/md/MdRefresh';
import { IconHeader } from '../../core';
import { SplitSection } from '../../sections';

const ListItem = (props: { children: string }) => {
  return (
    <ChakraListItem display="flex" alignItems="center">
      <ListIcon as={FaCircle} w={1} h={1} color="orange.400" />
      {props.children}
    </ChakraListItem>
  );
};

const Features = () => {
  return (
    <Box py={16} bg="brand.100" w="full">
      <Container id="hosting" w="full" maxW="8xl">
        <SplitSection containerStyle={{ gap: 8 }}>
          <SplitSection.LeftContent>
            <Box>
              <Heading as="h2" fontWeight="black">
                Get your website online
              </Heading>
              <Stack mt={6} color="gray.600">
                <Text>
                  With our Keplux One package, we make sure your website gets
                  online and stays online. We handle everything, letting you
                  focus on running your business.
                </Text>
                <Text>Custom projects are also eligible for this service.</Text>
              </Stack>
            </Box>
          </SplitSection.LeftContent>
          <SplitSection.RightContent>
            <SimpleGrid columns={{ base: 1, xl: 2 }} gap={4}>
              <Stack
                id="hosting"
                scrollMarginTop={20}
                bg="white"
                p={{ base: 4, md: 8 }}
                rounded="lg"
                w="full"
                h={{ xl: 'calc(100% - 2rem)' }}
              >
                <Box pl={4} pt={4}>
                  <IconHeader icon={FaServer} />
                </Box>
                <Heading as="h3" size="md" pt={8}>
                  Hosting
                </Heading>
                <Stack color="gray.600" fontSize="sm">
                  <Text>
                    To access your website, you need a hosting provider. There
                    are tons of options and considerations, but we make it easy
                    by handling it for you. Our hosting scales with your
                    business.
                  </Text>
                </Stack>
              </Stack>

              <Stack
                bg="white"
                p={{ base: 4, md: 8 }}
                rounded="lg"
                w="full"
                mt={{ xl: 8 }}
              >
                <Box pl={4} pt={4}>
                  <IconHeader icon={MdRefresh} />
                </Box>
                <Heading as="h3" size="md" pt={8}>
                  Updates
                </Heading>
                <Stack color="gray.600" fontSize="sm">
                  <Text>
                    With the Keplux One package, there are a variety of updates
                    we can perform for you. Some are automatic, others are at
                    your request. Our goal is to let you focus on your business
                    while we handle your website.
                  </Text>
                </Stack>
              </Stack>

              <Stack
                id="maintenance"
                scrollMarginTop={20}
                bg="white"
                p={{ base: 4, md: 8 }}
                rounded="lg"
                w="full"
                mt={{ xl: -8 }}
                h={{ xl: 'full' }}
              >
                <Box pl={4} pt={4}>
                  <IconHeader icon={FaCogs} />
                </Box>
                <Heading as="h3" size="md" pt={8}>
                  Maintenance
                </Heading>
                <Stack color="gray.600" fontSize="sm">
                  <Text>
                    Websites aren&apos;t something you want to set up and
                    forget. Over time, technologies can become vulnerable to
                    security threats and need to be patched--but that&apos;s not
                    all.
                  </Text>
                </Stack>
              </Stack>

              <Stack
                bg="white"
                p={{ base: 4, md: 8 }}
                rounded="lg"
                w="full"
                mt={{ xl: 0 }}
              >
                <Box pl={4} pt={4}>
                  <IconHeader icon={IoMdStats} />
                </Box>
                <Heading as="h3" size="md" pt={8}>
                  Analytics
                </Heading>
                <Stack color="gray.600" fontSize="sm">
                  <Text>
                    With the Keplux One package, there are a variety of updates
                    we can perform for you. Some are automatic, others are at
                    your request. Our goal is to let you focus on your business
                    while we handle your website.
                  </Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </SplitSection.RightContent>
        </SplitSection>
      </Container>
    </Box>
  );
};

export default Features;
