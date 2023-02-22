import {
  Button,
  Container,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { useFeaturedSeries } from '../../../hooks';
import { urlForImage } from '../../../studio/urlForImage';

const FeaturedSeries = () => {
  const [featuredSeries] = useFeaturedSeries();
  return (
    <Container maxW="7xl" w="full">
      <Heading as="h2" color="whiteAlpha.800">
        Featured series
      </Heading>
      {featuredSeries ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={16} mt={8}>
          <Image
            src={urlForImage(featuredSeries.coverPhoto).url()}
            alt={featuredSeries.coverPhoto.caption}
          />
          <Stack justifyContent="space-between">
            <Stack>
              <Heading as="h3" color="whiteAlpha.800">
                {featuredSeries.title}
              </Heading>
              <Text color="whiteAlpha.600">{featuredSeries.description}</Text>
            </Stack>
            <Button variant="primary" w="max">
              Series overview <Icon as={FaChevronRight} ml={2} boxSize={3} />
            </Button>
          </Stack>
        </SimpleGrid>
      ) : (
        <Spinner color="brand.600" size="xl" />
      )}
    </Container>
  );
};

export default FeaturedSeries;
