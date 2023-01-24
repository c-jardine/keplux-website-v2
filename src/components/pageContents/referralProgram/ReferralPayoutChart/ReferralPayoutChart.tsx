import {
  Box,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from '@chakra-ui/react';

const ReferralPayoutChart = () => {
  return (
    <Stack
      position="relative"
      id="referral-payout-chart"
      alignItems="center"
      maxW="6xl"
      w="full"
    >
      <Box maxW="4xl" w="full" textAlign="center" mb={8}>
        <Heading as="h2">Referral payout chart</Heading>
        <Text>
          Here is a general rundown of what you can expect to receive based on
          your referrals. It&apos;s not exhaustive, but should cover most cases.
        </Text>
      </Box>
      <TableContainer
        position="relative"
        w="full"
        scrollMarginTop={16}
        rounded="lg"
        shadow="md"
        overscrollBehaviorX="none"
      >
        <Table size="md">
          <Thead bg="brand.600" roundedTop="md">
            <Tr textTransform="uppercase" fontWeight="bold" color="white">
              <Td></Td>
              <Td>Payment amount</Td>
              <Td>Example</Td>
            </Tr>
          </Thead>
          <Tbody bg="black">
            <Tr>
              <Td fontWeight="bold">Keplux One</Td>
              <Td>$50 at closing, $150 after 6 months</Td>
              <Td minW="xs" whiteSpace="normal" wordBreak="normal">
                Your referral purchases the Keplux One package; you receive $50.
                If your referral is still paying for the package at 6 months,
                you receive an additional $150.
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Custom</Td>
              <Td>10% of total project cost</Td>
              <Td minW="xs" whiteSpace="normal" wordBreak="normal">
                Your referral&apos;s project costs a total of $5,750; you
                receive $575.
              </Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Referral</Td>
              <Td>$50 on first project closing</Td>
              <Td minW="xs" whiteSpace="normal" wordBreak="normal">
                You refer someone to our referral program. When their first
                referral closes, you receive $50.
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ReferralPayoutChart;
