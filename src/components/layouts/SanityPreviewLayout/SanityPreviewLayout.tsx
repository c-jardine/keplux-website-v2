import { AbsoluteCenter, Box } from '@chakra-ui/react';
import { SanityPreviewLayoutProps } from './SanityPreviewLayout.types';

const SanityPreviewLayout = (props: SanityPreviewLayoutProps) => {
  return (
    <Box w="full" h="full" bg="white">
      <AbsoluteCenter>{props.children}</AbsoluteCenter>
    </Box>
  );
};

export default SanityPreviewLayout;
