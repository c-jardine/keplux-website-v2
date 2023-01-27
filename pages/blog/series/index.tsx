import { Container, Heading, Stack, StackDivider } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { GoogleAdsense, SeriesCard } from '../../../src/components/blog';
import { client } from '../../../src/studio/client';
import { allSeriesWithPostsQuery } from '../../../src/studio/queries';
import { SeriesProps } from '../../../src/studio/types';

const Series = (props: { series: SeriesProps[] }) => {
  const { series } = props;
  return (
    <>
      <NextSeo
        title="Tutorial Series"
        description="Curated collections of tutorials for building projects from start to finish. Including React, Next.js, TypeScript, headless CMS, and more!"
        canonical="https://www.keplux.com/blog/series"
      />
      <Stack alignItems="center" spacing={16}>
        <Container maxW="7xl" w="full">
          <Stack alignItems="center" spacing={12}>
            <Stack alignItems="center">
              <Heading
                as="h1"
                fontSize={['5xl', , '6xl', '7xl']}
                fontWeight="black"
                textAlign="center"
                color="whiteAlpha.800"
              >
                Tutorial Series
              </Heading>
              <Heading
                as="h2"
                maxW="2xl"
                w="full"
                fontSize="xl"
                textAlign="center"
                fontWeight="medium"
                color="whiteAlpha.600"
              >
                Curated collections of tutorials for building projects from
                start to finish. Including React, Next.js, TypeScript, headless
                CMS, and more!
              </Heading>
            </Stack>
          </Stack>
          <Container as={Stack} spacing={16} maxW="6xl" my={16}>
            <Stack spacing={4}>
              <Stack
                gap={16}
                divider={<StackDivider borderColor="whiteAlpha.400" />}
              >
                {series.map((series: SeriesProps, index) =>
                  index % 3 === 0 ? (
                    <Stack
                      key={series._id}
                      gap={16}
                      divider={<StackDivider borderColor="whiteAlpha.400" />}
                      w="full"
                    >
                      <SeriesCard {...series} />
                      <GoogleAdsense />
                    </Stack>
                  ) : (
                    <>
                      <SeriesCard key={series._id} {...series} />
                    </>
                  )
                )}
              </Stack>
            </Stack>
          </Container>
        </Container>
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const series: SeriesProps[] = await client.fetch(allSeriesWithPostsQuery);

  return {
    props: { series },
    revalidate: 10,
  };
};

export default Series;
