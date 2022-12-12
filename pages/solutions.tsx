import { Box, Stack } from '@chakra-ui/react';
import {
  Design,
  Development,
  Addons,
  Features,
} from '../src/components/pageContents/solutions';

const SolutionsPage = () => {
  return (
    <Box py={16}>
      <Box
        as={Stack}
        alignItems="center"
        position="relative"
        zIndex={1}
        bg="gray.50"
        spacing={{ base: 16, lg: 28 }}
      >
        <Design />
        <Box w="full">
          <Development />
          <Box mt={-16}>
            <Addons />
          </Box>
        </Box>
        <Features />
      </Box>
    </Box>
  );
};

export default SolutionsPage;
