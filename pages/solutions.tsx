import { Box, Stack } from '@chakra-ui/react';
import {
  Addons,
  Development,
  Features,
} from '../src/components/pageContents/solutions';

const SolutionsPage = () => {
  return (
    <Box overflow="hidden">
      <Box
        as={Stack}
        alignItems="center"
        position="relative"
        zIndex={1}
        bg="gray.50"
        spacing={{ base: 16, lg: 28 }}
      >
        <Box position="relative" zIndex={1} w="full">
          <Development />
          <Box mt={-24}>
            <Addons />
          </Box>
        </Box>
        <Box position="relative" w="full" maxW="1920px">
          <Box
            position="absolute"
            w="container.lg"
            h="container.lg"
            top={-64}
            left={-96}
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#eef2ff"
                d="M40.1,-63.2C49.6,-56.3,53.4,-41.2,56.1,-27.8C58.9,-14.4,60.8,-2.7,59,8.4C57.3,19.5,52,29.9,45.6,42.4C39.3,54.8,31.9,69.2,21,73.2C10.1,77.1,-4.4,70.6,-18,64.9C-31.6,59.2,-44.3,54.3,-53.8,45.4C-63.3,36.6,-69.6,23.7,-68.1,11.9C-66.6,0,-57.3,-11,-52.1,-24.4C-46.9,-37.7,-45.7,-53.5,-37.7,-61.1C-29.7,-68.7,-14.9,-68,0.2,-68.4C15.3,-68.7,30.6,-70.1,40.1,-63.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </Box>
          <Features />
        </Box>
        {/* <Design /> */}
      </Box>
    </Box>
  );
};

export default SolutionsPage;
