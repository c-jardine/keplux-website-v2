import { Stack } from '@chakra-ui/react';
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
      </Stack>
    </>
  );
};

export default Home;
