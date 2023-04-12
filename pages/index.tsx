import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import {
  CmsSection,
  EcommerceSection,
  HomeHeader,
  MonthlyPlansSection,
  PerformanceSection,
  SmallStuffSection,
} from '../src/components/pages';

const Home = () => {
  return (
    <>
      <NextSeo
        title="Web Design & Web Development in Toledo, OH"
        description="Seeking web design and web development in Toledo, OH? Keplux Development delivers modern web solutions for online success. Contact us for custom websites!"
        canonical="https://www.keplux.com"
      />
      <Stack alignItems="center" spacing={16}>
        <HomeHeader />
        <PerformanceSection />
        <CmsSection />
        <EcommerceSection />
        <SmallStuffSection />
        <MonthlyPlansSection />
        <Box>
          <Text
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="semibold"
            color="whiteAlpha.600"
            textAlign="center"
          >
            Featured on
          </Text>
          <Stack
            mt={8}
            gap={12}
            direction={{ base: 'column', md: 'row' }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              as="a"
              href="https://upcity.com/profiles/keplux-development"
              target="blank"
              position="relative"
              filter="grayscale(75%)"
              transition="200ms ease-in-out"
              cursor="pointer"
              _hover={{
                filter: 'grayscale(0%)',
              }}
            >
              <Image
                src="/featured/upcity-badge.png"
                alt="Review Keplux Development Profile on UpCity"
                maxH={48}
                style={{ objectFit: 'contain' }}
              />
            </Box>
            <Box
              as="a"
              href="https://www.designrush.com/agency/profile/keplux-development"
              target="blank"
              position="relative"
              filter="grayscale(75%)"
              transition="200ms ease-in-out"
              cursor="pointer"
              _hover={{
                filter: 'grayscale(0%)',
              }}
            >
              <Image
                src="/featured/design-rush-badge.png"
                alt="Review Keplux Development Profile on DesignRush"
                maxH={48}
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Home;
