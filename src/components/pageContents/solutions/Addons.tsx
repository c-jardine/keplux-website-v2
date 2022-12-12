import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import ecommerceImage from '../../../../public/services/ecommerce.webp';
import contentManagementImage from '../../../../public/services/sanity-studio.webp';

const Addons = () => {
  return (
    <Container id="design" w="full" maxW="6xl">
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16}>
        <Stack id="ecommerce" scrollMarginTop="5rem" alignItems="center">
          <Box
            position="relative"
            w="full"
            h={72}
            rounded="lg"
            overflow="hidden"
            borderWidth={1}
            borderColor="gray.200"
          >
            <Image
              src={ecommerceImage}
              alt="A team building a website."
              fill
              style={{ objectFit: 'cover', objectPosition: 'top left' }}
            />
          </Box>
          <Stack p={{ base: 4, md: 8 }}>
            <Heading as="h2">E-Commerce</Heading>
            <Stack color="gray.600" fontSize="sm">
              <Text>
                The best e-commerce websites load fast, regardless of how many
                products are listed, and should reflect the company&apos;s
                brand.
              </Text>
              <Text>
                Using headless e-commerce solutions, we can create an e-commerce
                design that you love and your customers don&apos;t get
                frustrated with.
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          id="content-management"
          scrollMarginTop="5rem"
          alignItems="center"
        >
          <Box
            position="relative"
            w="full"
            h={72}
            rounded="lg"
            overflow="hidden"
            borderWidth={1}
            borderColor="gray.200"
          >
            <Image
              src={contentManagementImage}
              alt="A team building a website."
              fill
              style={{ objectFit: 'cover', objectPosition: 'top left' }}
            />
          </Box>
          <Stack p={{ base: 4, md: 8 }}>
            <Heading as="h2">Content Management</Heading>
            <Stack color="gray.600" fontSize="sm">
              <Text>
                Whether your website showcases your blog, your rental
                properties, weekly specials for your store, or anything else you
                can think of, you&apos;re in control of your content.
                There&apos;s no limit to what you can manage.
              </Text>
              <Text>
                If you already use a content management system, we may be able
                to integrate it into your project, too!
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Addons;
