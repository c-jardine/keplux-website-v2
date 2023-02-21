import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  chakra,
  Container,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { BasicHeader, KLink } from '../src/components/core';
import { client } from '../src/studio/client';
import { allProjectsQuery } from '../src/studio/queries';
import { ProjectProps } from '../src/studio/types';
import { urlForImage } from '../src/studio/urlForImage';

const OurWorkPage: NextPage = (props: { projects: ProjectProps[] }) => {
  return (
    <>
      <NextSeo
        title="Our websites and web apps"
        description="View websites and web apps we've built, including e-commerce and content management solutions."
        canonical="https://www.keplux.com/our-work"
      />
      <Stack alignItems="center" spacing={16}>
        <BasicHeader
          title="Check out some of our work"
          subtitle={
            <chakra.span>
              A collection of some of our past work, much of which can be used
              as a template in our{' '}
              <KLink href="/pricing" color="brand.600">
                Starter Plan
              </KLink>
              .
            </chakra.span>
          }
        />

        <Container maxW="7xl" w="full">
          <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} gap={16}>
            {props.projects.map((project) => (
              <Card
                key={project._id}
                rounded="lg"
                overflow="hidden"
                borderWidth={1}
                borderColor="whiteAlpha.400"
                shadow="none"
                bg="black"
              >
                <CardHeader position="relative" h={{ lg: 72, xl: 52 }} p={0}>
                  <Image
                    src={urlForImage(project.gallery[0]).url()}
                    alt={`An example of the project called ${project.title}.`}
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                </CardHeader>
                <CardBody>
                  <Heading as="h3" fontSize="lg" color="whiteAlpha.800">
                    {project.title}
                  </Heading>
                  <Heading
                    as="h4"
                    mt={1}
                    fontSize="sm"
                    fontWeight="normal"
                    color="whiteAlpha.600"
                  >
                    {project.subtitle}
                  </Heading>
                  <Text mt={4} fontSize="sm" color="whiteAlpha.600">
                    {project.description}
                  </Text>
                </CardBody>
                <CardFooter justifyContent="flex-end">
                  <KLink
                    href={project.url}
                    target="_blank"
                    fontSize="sm"
                    color="whiteAlpha.600"
                  >
                    View{' '}
                    <Icon
                      as={FaExternalLinkAlt}
                      ml={1}
                      w={3}
                      h={3}
                      color="whiteAlpha.800"
                    />
                  </KLink>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projects: ProjectProps[] = await client.fetch(allProjectsQuery);

  return {
    props: { projects },
    revalidate: 10,
  };
};

export default OurWorkPage;
