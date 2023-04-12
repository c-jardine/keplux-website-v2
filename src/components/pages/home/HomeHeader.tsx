import {
  Box,
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
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import headerImg from '../../../../public/backgrounds/web-development.jpg';
import { BasicCard, MotionButton } from '../../core';

const HomeHeader = () => {
  const router = useRouter();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <Box position="relative" w="full">
      <Box w="full" mt={-28}>
        <Box position="relative" maxW="1920px" w="full" mx="auto">
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
                  Top Web Design and Web Development Services in Toledo, OH
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
                  Keplux Development offers expert web design and web
                  development services in Toledo, OH. Our modern technologies
                  and cutting-edge strategies deliver exceptional websites that
                  drive online success. Contact us for custom web solutions
                  tailored to your business needs.
                </Heading>
              </Stack>
              <Stack
                as={motion.div}
                variants={container}
                initial="hidden"
                animate="show"
                direction={{ base: 'column', sm: 'row' }}
                spacing={4}
              >
                <motion.div variants={item}>
                  <MotionButton
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      void router.push('/contact');
                    }}
                  >
                    <Text onPointerEnterCapture={(e) => e.stopPropagation()}>
                      Start your project
                    </Text>
                  </MotionButton>
                </motion.div>
                <motion.div variants={item}>
                  <MotionButton
                    variant="secondary"
                    justifyContent="space-between"
                    borderColor="black"
                    onClick={(e) => {
                      e.preventDefault();
                      void router.push('/pricing');
                    }}
                  >
                    <Flex alignItems="center" gap={4}>
                      <Text>View pricing</Text>
                      <Icon as={FaChevronRight} color="white" />
                    </Flex>
                  </MotionButton>
                </motion.div>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Container maxW="8xl" w="full" mt={-32}>
        <SimpleGrid
          as={motion.div}
          columns={{ base: 1, md: 2, xl: 4 }}
          gap={16}
          variants={container}
          animate="show"
        >
          <BasicCard
            icon={MdWeb}
            title="Website design and development"
            body="Visually stunning websites built with modern technologies and creative design to enhance online presence and engage audiences."
          />
          <BasicCard
            icon={MdStore}
            title="Web apps and ecommerce"
            body="Customized web apps and e-commerce solutions that streamline online operations, drive sales, and deliver exceptional user experiences."
          />
          <BasicCard
            icon={MdSearch}
            title="Search engine optimization"
            body="Boost online visibility & drive targeted traffic with strategic strategies for increased rankings & business growth."
          />
          <BasicCard
            icon={MdSettings}
            title="Website hosting and maintenance"
            body="Reliable hosting and maintenance for optimal website performance & security. Focus on your business, we'll handle the technicalities."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default HomeHeader;
