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
        title="Web development in Toledo, OH"
        description="Websites built with modern technologies, resulting in lightning performance, amazing SEO, and more conversions."
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
