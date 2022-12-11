import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { RiBankFill } from '@react-icons/all-files/ri/RiBankFill';
import { FaCreditCard } from '@react-icons/all-files/fa/FaCreditCard';
import { FaMoneyCheck } from '@react-icons/all-files/fa/FaMoneyCheck';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { GetServerSidePropsContext } from 'next';
import braintree from 'braintree';

const PersonalInfo = () => {
  return (
    <Stack spacing={4}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
        <FormControl>
          <FormLabel
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            First name
          </FormLabel>
          <Input name="firstName" autoComplete="given-name" />
        </FormControl>
        <FormControl>
          <FormLabel
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Last name
          </FormLabel>
          <Input name="lastName" autoComplete="family-name" />
        </FormControl>
      </SimpleGrid>
      <FormControl>
        <FormLabel fontSize="sm" textTransform="uppercase" letterSpacing="wide">
          Address line 1
        </FormLabel>
        <Input name="addressLine1" autoComplete="address-line1" />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="sm" textTransform="uppercase" letterSpacing="wide">
          Address line 2
        </FormLabel>
        <Input name="addressLine2" autoComplete="address-line2" />
      </FormControl>
      <Flex flexDirection={{ base: 'column', sm: 'row' }} gap={4}>
        <FormControl>
          <FormLabel
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            City
          </FormLabel>
          <Input name="city" autoComplete="address-level2" />
        </FormControl>
        <FormControl w={{ base: 'full', sm: 48 }}>
          <FormLabel
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            State
          </FormLabel>
          <Input name="state" autoComplete="address-level1" />
        </FormControl>
        <FormControl w={{ base: 'full', sm: 64 }}>
          <FormLabel
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Zip
          </FormLabel>
          <Input name="zip" autoComplete="postal-code" />
        </FormControl>
      </Flex>
    </Stack>
  );
};

const DebitCardInfo = () => {
  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel fontSize="sm" textTransform="uppercase" letterSpacing="wide">
          Card number
        </FormLabel>
        <Input name="addressLine1" autoComplete="address-line1" />
      </FormControl>
      <Flex gap={4}>
        <SimpleGrid columns={2} gap={4}>
          <FormControl>
            <FormLabel
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              MM
            </FormLabel>
            <Input name="addressLine1" autoComplete="address-line1" />
          </FormControl>
          <FormControl>
            <FormLabel
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              YY
            </FormLabel>
            <Input name="addressLine1" autoComplete="address-line1" />
          </FormControl>
        </SimpleGrid>
        <FormControl>
          <FormLabel
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            CCV
          </FormLabel>
          <Input name="addressLine1" autoComplete="address-line1" />
        </FormControl>
        <FormControl>
          <FormLabel
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Billing Zip Code
          </FormLabel>
          <Input name="addressLine1" autoComplete="address-line1" />
        </FormControl>
      </Flex>
    </Stack>
  );
};

const BankAccountInfo = () => {
  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel fontSize="sm" textTransform="uppercase" letterSpacing="wide">
          Account number
        </FormLabel>
        <Input name="addressLine1" autoComplete="address-line1" />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="sm" textTransform="uppercase" letterSpacing="wide">
          Confirm account number
        </FormLabel>
        <Input name="addressLine1" autoComplete="address-line1" />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="sm" textTransform="uppercase" letterSpacing="wide">
          Routing number
        </FormLabel>
        <Input name="addressLine1" autoComplete="address-line1" />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="sm" textTransform="uppercase" letterSpacing="wide">
          Confirm account number
        </FormLabel>
        <Input name="addressLine1" autoComplete="address-line1" />
      </FormControl>
    </Stack>
  );
};

const PaperCheckModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<FaMoneyCheck size={24} />}
        onClick={onOpen}
        variant="ghost"
        justifyContent="flex-start"
        fontSize="sm"
        fontWeight="normal"
        textTransform="uppercase"
      >
        Receive a paper check
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="container.sm" w="full">
          <ModalHeader>Receive a paper check</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PersonalInfo />
          </ModalBody>
          <ModalFooter>
            <SimpleGrid columns={2} gap={4}>
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="green">Save</Button>
            </SimpleGrid>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const DebitCardModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<FaCreditCard size={24} />}
        onClick={onOpen}
        variant="ghost"
        justifyContent="flex-start"
        fontSize="sm"
        fontWeight="normal"
        textTransform="uppercase"
      >
        Add a debit card
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="container.sm" w="full">
          <ModalHeader>Add a debit card</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <DebitCardInfo />
          </ModalBody>
          <ModalFooter>
            <SimpleGrid columns={2} gap={4}>
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="green">Save</Button>
            </SimpleGrid>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const BankAccountModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<RiBankFill size={24} />}
        onClick={onOpen}
        variant="ghost"
        justifyContent="flex-start"
        fontSize="sm"
        fontWeight="normal"
        textTransform="uppercase"
      >
        Add a bank account
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="container.sm" w="full">
          <ModalHeader>Add a bank account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <BankAccountInfo />
          </ModalBody>
          <ModalFooter>
            <SimpleGrid columns={2} gap={4}>
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="green">Save</Button>
            </SimpleGrid>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const PayoutOptions = () => {
  return (
    <>
      <Stack divider={<StackDivider />}>
        <PaperCheckModal />
        <DebitCardModal />
        <BankAccountModal />
      </Stack>
    </>
  );
};

const ReferralProgramProfilePage = () => {
  return (
    <Stack py={16} spacing={16} alignItems="center">
      <Box maxW="4xl" w="full" textAlign="center" mx="auto">
        <Heading as="h1">Finish setting up your profile</Heading>
        <Text>
          We need a few more details before you can start sending referrals.
        </Text>
      </Box>
      <Container
        as={Stack}
        spacing={4}
        p={{ base: 4, md: 8 }}
        maxW="2xl"
        w="full"
        bg="white"
        rounded="lg"
        shadow="md"
      >
        <Tabs>
          <TabList>
            <Tab>Personal Info</Tab>
            <Tab>Payout Options</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <PersonalInfo />
            </TabPanel>
            <TabPanel>
              <PayoutOptions />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Stack>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const supabase = createServerSupabaseClient(context);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: '/referral-program/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};

export default ReferralProgramProfilePage;
