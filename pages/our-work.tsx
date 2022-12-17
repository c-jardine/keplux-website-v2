import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
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
import { KLink } from '../src/components/core';
import { allProjectsQuery, client, urlForImage } from '../src/lib/studio';
import { ProjectProps } from '../src/lib/studio/types';

const OurWorkPage: NextPage = (props: { projects: ProjectProps[] }) => {
  return (
    <Stack alignItems="center" spacing={16} py={28}>
      <Container maxW="7xl" w="full">
        <Stack alignItems="center" spacing={12}>
          <Stack alignItems="center">
            <Heading
              as="h1"
              fontSize={['5xl', , '6xl', '7xl']}
              fontWeight="black"
              textAlign="center"
              color="black"
            >
              Check out some of our work
            </Heading>
            <Heading
              as="h2"
              maxW="2xl"
              w="full"
              fontSize="xl"
              textAlign="center"
              fontWeight="medium"
              color="gray.500"
            >
              A collection of some of our past work, much of which can be used
              as a template in our{' '}
              <KLink href="/pricing" color="brand.600">
                Starter Plan
              </KLink>
              .
            </Heading>
          </Stack>
        </Stack>
      </Container>

      <Container maxW="7xl" w="full">
        <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} gap={16}>
          {props.projects.map((project) => (
            <Card
              key={project._id}
              rounded="lg"
              overflow="hidden"
              borderWidth={1}
              borderColor="gray.200"
              shadow="none"
            >
              <CardHeader position="relative" h={{ lg: 72, xl: 52 }} p={0}>
                <Image
                  src={urlForImage(project.gallery[0]).url()}
                  alt=""
                  w="full"
                  h="full"
                  objectFit="cover"
                />
              </CardHeader>
              <CardBody>
                <Heading as="h3" fontSize="lg">
                  {project.title}
                </Heading>
                <Heading
                  as="h4"
                  mt={1}
                  fontSize="sm"
                  fontWeight="normal"
                  color="gray.600"
                >
                  {project.subtitle}
                </Heading>
                <Text mt={4} fontSize="sm" color="gray.500">
                  {project.description}
                </Text>
              </CardBody>
              <CardFooter justifyContent="flex-end">
                <KLink href={project.url} target="_blank" fontSize="sm">
                  View <Icon as={FaExternalLinkAlt} ml={1} w={3} h={3} />
                </KLink>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projects: ProjectProps[] = await client.fetch(allProjectsQuery);

  return {
    props: { projects },
  };
};

export default OurWorkPage;
