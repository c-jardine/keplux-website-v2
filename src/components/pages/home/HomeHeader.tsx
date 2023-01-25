import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { MdSettings } from '@react-icons/all-files/md/MdSettings';
import { MdStore } from '@react-icons/all-files/md/MdStore';
import { MdWeb } from '@react-icons/all-files/md/MdWeb';
import Image from 'next/image';
import Link from 'next/link';
import headerImg from '../../../../public/backgrounds/web-development.jpg';
import { BasicCard } from '../../core';

const HomeHeader = () => {
  return (
    <Box position="relative" w="full">
      <Box w="full" mt={-28}>
        <Box position="relative" maxW="1920px" w="full">
          <Image
            src={headerImg}
            alt="A laptop developing a website."
            fill
            priority
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
                  technologies and strategies that give your website lightning
                  fast performance and SEO that helps boost conversions.
                </Heading>
              </Stack>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <Button as={Link} href="/contact" variant="primary">
                  Start your project
                </Button>
                <Button
                  as={Link}
                  href="/pricing"
                  variant="secondary"
                  justifyContent="space-between"
                  borderColor="black"
                >
                  <Flex alignItems="center" gap={4}>
                    <Text>View pricing</Text>
                    <Icon as={FaChevronRight} color="white" />
                  </Flex>
                </Button>
              </Stack>
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
  );
};

export default HomeHeader;