import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import designIllustration from '../../../../public/illustrations/design.png';
import { SplitSection } from '../../sections';

const Design = () => {
  return (
    <Container id="design" w="full" maxW="7xl">
      <SplitSection
        containerStyle={{
          maxW: '8xl',
          w: 'full',
          gap: { base: 0, lg: 16 },
        }}
      >
        <SplitSection.LeftContent>
          <Box position="relative" w="full" h="full" minH={72}>
            <Image
              src={designIllustration}
              alt="A team building a website."
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </SplitSection.LeftContent>
        <SplitSection.RightContent>
          <Box py={28}>
            <Heading as="h1" fontWeight="black">
              Professional web design
            </Heading>
            <Stack mt={6} color="gray.600">
              <Text>
                Whether you choose a template or custom design solution, we make
                sure your website&apos;s design matches your brand. All of our
                designs are responsive, so they look great on any screen size.
              </Text>
              <Text>
                Note: We only create designs as part of a development package.
                If you only need design services, we&apos;d be happy to
                recommend other businesses.
              </Text>
            </Stack>
            <Button as={Link} href="/contact" colorScheme="brand" mt={8}>
              Contact Us
            </Button>
          </Box>
        </SplitSection.RightContent>
      </SplitSection>
    </Container>
  );
};

export default Design;
