import {
  Box,
  Button,
  chakra,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useRadio,
  useRadioGroup,
  UseRadioProps,
} from '@chakra-ui/react';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { NextPage } from 'next';
import Link from 'next/link';
import { SplitSection } from '../src/components/sections';
import React from 'react';

const RadioCard = (props: UseRadioProps & { children: string }) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        py={2}
        px={4}
        fontSize="sm"
        borderWidth="1px"
        borderRadius="md"
        textTransform="capitalize"
        transition="200ms ease-in-out"
        _checked={{
          bg: 'brand.600',
          color: 'white',
          borderColor: 'brand.600',
        }}
        _hover={{
          bg: 'brand.500',
          color: 'white',
          borderColor: 'brand.500',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const QuoteFields = (props) => {
  return (
    <HStack flexWrap="wrap" w="full" rowGap={2}>
      <Box borderWidth={1} borderColor="gray.300" rounded="lg" px={2} py={1}>
        <Text>Starter Package</Text>
      </Box>
      <Box borderWidth={1} borderColor="gray.300" rounded="lg" px={2} py={1}>
        <Text>Professional Package</Text>
      </Box>
      <Box borderWidth={1} borderColor="gray.300" rounded="lg" px={2} py={1}>
        <Text>E-Commerce Package</Text>
      </Box>
      <Box borderWidth={1} borderColor="gray.300" rounded="lg" px={2} py={1}>
        <Text>Ultimate Package</Text>
      </Box>
      <Box borderWidth={1} borderColor="gray.300" rounded="lg" px={2} py={1}>
        <Text>Hosting</Text>
      </Box>
      <Box borderWidth={1} borderColor="gray.300" rounded="lg" px={2} py={1}>
        <Text>Content Management System</Text>
      </Box>
      <Box borderWidth={1} borderColor="gray.300" rounded="lg" px={2} py={1}>
        <Text>E-Commerce</Text>
      </Box>
      <Box borderWidth={1} borderColor="gray.300" rounded="lg" px={2} py={1}>
        <Text>Website update</Text>
      </Box>
    </HStack>
  );
};

const ContactPage: NextPage = () => {
  const inquiryTypes = ['quote', 'general'];

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    website: '',
    inquiryType: '',
    interestedIn: [],
    message: '',
  });

  const _handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'inquiryType',
    value: formData.inquiryType,
    defaultValue: formData.inquiryType,
    onChange: _handleChange,
  });

  const group = getRootProps();
  return (
    <>
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
                Send a message to get started or learn more
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
                Need a quote or looking for more information? Get in touch with
                one of the methods below and we&apos;ll get back to you soon.
              </Heading>
            </Stack>
          </Stack>
        </Container>

        <SplitSection
          containerStyle={{ maxW: '7xl', w: 'full', mx: 'auto', gap: 16 }}
        >
          <SplitSection.LeftContent>
            <Container position="relative" maxW="2xl" w="full">
              <Box
                p={{ base: 4, md: 8 }}
                rounded="lg"
                borderWidth={1}
                borderColor="gray.300"
              >
                <Stack spacing={4}>
                  <SimpleGrid columns={{ base: 1, lg: 2 }} gap={4}>
                    <FormControl>
                      <FormLabel
                        marginBottom={1}
                        fontSize="xs"
                        fontWeight="normal"
                        letterSpacing="wide"
                      >
                        Name
                      </FormLabel>
                      <Input />
                    </FormControl>
                    <FormControl>
                      <FormLabel
                        marginBottom={1}
                        fontSize="xs"
                        fontWeight="normal"
                        letterSpacing="wide"
                      >
                        Email
                      </FormLabel>
                      <Input />
                    </FormControl>
                    <FormControl>
                      <FormLabel
                        marginBottom={1}
                        fontSize="xs"
                        fontWeight="normal"
                        letterSpacing="wide"
                      >
                        Website
                      </FormLabel>
                      <Input />
                    </FormControl>
                    <FormControl>
                      <FormLabel
                        marginBottom={1}
                        fontSize="xs"
                        fontWeight="normal"
                        letterSpacing="wide"
                      >
                        Inquiry Type
                      </FormLabel>
                      <HStack {...group}>
                        {inquiryTypes.map((value) => {
                          const radio = getRadioProps({ value });
                          return (
                            <RadioCard key={value} {...radio}>
                              {value}
                            </RadioCard>
                          );
                        })}
                      </HStack>
                    </FormControl>
                  </SimpleGrid>
                  {inqType === 'quote' && <QuoteFields />}
                  <FormControl>
                    <FormLabel
                      marginBottom={1}
                      fontSize="xs"
                      fontWeight="normal"
                      letterSpacing="wide"
                    >
                      Message
                    </FormLabel>
                    <Textarea />
                  </FormControl>
                  <Button variant="primary">Send</Button>
                </Stack>
              </Box>
            </Container>
          </SplitSection.LeftContent>
          <SplitSection.RightContent>
            <Container w="full" h="full">
              <Stack justifyContent="center" h="full" spacing={4} pb={16}>
                <Heading as="h2">Contact information</Heading>
                <Stack spacing={8} pl={4}>
                  <Box
                    borderLeftWidth={4}
                    borderColor="brand.600"
                    pl={4}
                    py={2}
                  >
                    <Text
                      textTransform="uppercase"
                      fontWeight="semibold"
                      color="gray.600"
                    >
                      Email
                    </Text>
                    <Link href="mailto:contact@keplux.com">
                      <chakra.span color="gray.500">
                        contact@keplux.com
                      </chakra.span>
                    </Link>
                  </Box>
                  <Stack
                    borderLeftWidth={4}
                    borderColor="brand.600"
                    pl={4}
                    py={2}
                  >
                    <Text
                      textTransform="uppercase"
                      fontWeight="semibold"
                      color="gray.600"
                    >
                      Social Media
                    </Text>
                    <HStack>
                      <Icon
                        as={FaFacebook}
                        color="gray.500"
                        w={6}
                        h={6}
                        _hover={{ color: 'black' }}
                        transition="200ms ease-in-out"
                        cursor="pointer"
                      />
                      <Icon
                        as={FaLinkedinIn}
                        color="gray.500"
                        w={6}
                        h={6}
                        _hover={{ color: 'black' }}
                        transition="200ms ease-in-out"
                        cursor="pointer"
                      />
                    </HStack>
                  </Stack>
                </Stack>
              </Stack>
            </Container>
          </SplitSection.RightContent>
        </SplitSection>
      </Stack>
    </>
  );
};

export default ContactPage;
