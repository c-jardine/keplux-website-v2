import {
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { FaCalendarAlt } from '@react-icons/all-files/fa/FaCalendarAlt';
import { useRouter } from 'next/router';
import { StarterPricing } from '../../../lib/pricing';
import { MotionButton } from '../../core';
import { LeadInHeading, Subsection } from '../../sections';

const MonthlyPlansSection = () => {
  const router = useRouter();

  return (
    <Container maxW="7xl" w="full">
      <Stack alignItems="center" w="full" spacing={8}>
        <LeadInHeading
          smallText="Ideal solutions for small businesses"
          heading="Monthly Plans"
          icon={FaCalendarAlt}
          color={['brand.600', 'brand.400']}
        />
        <Stack alignItems="center" spacing={16} w="full">
          <Stack alignItems="center" spacing={8}>
            <Stack>
              <Heading
                as="h4"
                maxW="3xl"
                w="full"
                textAlign="center"
                color="whiteAlpha.800"
              >
                We&apos;ll manage everything for you
              </Heading>
              <Text
                maxW="xl"
                w="full"
                fontSize="xl"
                textAlign="center"
                color="whiteAlpha.600"
              >
                Choose a monthly plan and let us handle everything for you,
                giving you more time to focus on your business.
              </Text>
            </Stack>
            <HStack spacing={4}>
              <MotionButton
                variant="primary"
                onClick={(e) => {
                  e.preventDefault();
                  void router.push('/contact');
                }}
              >
                Buy now
              </MotionButton>
              <MotionButton
                onClick={(e) => {
                  e.preventDefault();
                  void router.push('/pricing');
                }}
                variant="secondary"
              >
                View other options
              </MotionButton>
            </HStack>
          </Stack>
          <Center
            w="100vw"
            bg="whiteAlpha.50"
            py={8}
            borderTopWidth={1}
            borderBottomWidth={1}
            borderColor="whiteAlpha.400"
          >
            <Stack
              direction={{ base: 'column', lg: 'row' }}
              divider={<StackDivider borderColor="whiteAlpha.400" />}
            >
              <Stack
                alignItems="center"
                px={{ lg: 16 }}
                py={{ base: 8, lg: 0 }}
              >
                <Text
                  fontWeight="black"
                  fontSize="4xl"
                  lineHeight={1}
                  color="whiteAlpha.800"
                >
                  $0
                </Text>
                <Text
                  textTransform="uppercase"
                  letterSpacing="wide"
                  fontWeight="bold"
                  color="whiteAlpha.600"
                >
                  down
                </Text>
              </Stack>
              <Stack
                alignItems="center"
                px={{ lg: 16 }}
                py={{ base: 8, lg: 0 }}
              >
                <Text
                  fontWeight="black"
                  fontSize="4xl"
                  lineHeight={1}
                  color="whiteAlpha.800"
                >
                  $175
                </Text>
                <Text
                  textTransform="uppercase"
                  letterSpacing="wide"
                  fontWeight="bold"
                  color="whiteAlpha.600"
                >
                  per month
                </Text>
              </Stack>
              <Stack
                alignItems="center"
                px={{ lg: 16 }}
                py={{ base: 8, lg: 0 }}
              >
                <Text
                  fontWeight="black"
                  fontSize="4xl"
                  lineHeight={1}
                  color="whiteAlpha.800"
                >
                  No contract
                </Text>
                <Text
                  textTransform="uppercase"
                  letterSpacing="wide"
                  fontWeight="bold"
                  color="whiteAlpha.600"
                >
                  required
                </Text>
              </Stack>
            </Stack>
          </Center>

          <Stack alignItems="center" w="full">
            <Text
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="semibold"
              color="whiteAlpha.600"
            >
              What&apos;s included
            </Text>

            {StarterPricing.map((feature, index) => (
              <Subsection
                key={feature.id}
                isFirst={index === 0}
                small
                markerPos="1.85rem"
                leftContent={
                  index % 2 === 0 && (
                    <Stack
                      alignItems={
                        index % 2 === 0 ? { lg: 'flex-end' } : 'flex-start'
                      }
                    >
                      <Text
                        fontWeight="black"
                        fontSize="lg"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        color="whiteAlpha.800"
                      >
                        {feature.heading}
                      </Text>
                      <Text
                        color="whiteAlpha.600"
                        letterSpacing="wide"
                        textAlign={index % 2 === 0 ? { lg: 'right' } : 'left'}
                      >
                        {feature.description}
                      </Text>
                    </Stack>
                  )
                }
                rightContent={
                  index % 2 !== 0 && (
                    <Box>
                      <Text
                        fontWeight="black"
                        fontSize="lg"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        color="whiteAlpha.800"
                      >
                        {feature.heading}
                      </Text>
                      <Text color="whiteAlpha.600" letterSpacing="wide">
                        {feature.description}
                      </Text>
                    </Box>
                  )
                }
              />
            ))}
          </Stack>
          <HStack spacing={4}>
            <MotionButton
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                void router.push('/contact');
              }}
            >
              Buy now
            </MotionButton>
            <MotionButton
              onClick={(e) => {
                e.preventDefault();
                void router.push('/pricing');
              }}
              variant="secondary"
            >
              View other options
            </MotionButton>
          </HStack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default MonthlyPlansSection;
