import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import FaqContents from './Faq.constants';

const Faq = () => {
  return (
    <Stack
      id="faq"
      maxW="6xl"
      w="full"
      alignItems="center"
      scrollMarginTop={16}
    >
      <Box maxW="4xl" w="full" textAlign="center">
        <Heading as="h2">FAQ</Heading>
        <Text>
          These should cover everything you need to know, but feel free to{' '}
          <Link href="/contact" color="brand.600" fontWeight="semibold">
            contact us
          </Link>{' '}
          if we&apos;re missing something or you have other questions.
        </Text>
      </Box>
      <Accordion allowToggle w="full" pt={8}>
        {FaqContents.map((item) => (
          <AccordionItem key={item.question} borderColor="brand.200">
            <AccordionButton
              py={4}
              justifyContent="space-between"
              textAlign="left"
              borderLeftWidth={4}
              borderColor="transparent"
              _hover={{ bg: 'brand.100' }}
              _expanded={{ borderColor: 'brand.200 !important' }}
            >
              {item.question}
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel borderLeftWidth={4} borderColor="brand.200">
              {item.panel}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Stack>
  );
};

export default Faq;
