import {
  AbsoluteCenter,
  Box,
  Circle,
  Show,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

const Content = (props: { children: React.ReactNode }) => {
  return <>{props.children}</>;
};

const Subsection = (props: {
  markerPos: number | string;
  isFirst?: boolean;
  flipContentOnMobile?: boolean;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}) => {
  return (
    <SimpleGrid
      templateColumns={{ base: '1fr', lg: '1fr auto 1fr' }}
      maxW="6xl"
      w="full"
      gap={{ base: 8, lg: 16 }}
    >
      {/* Mobile dashed line */}
      <Show below="lg">
        <Stack position="relative" spacing={0} alignItems="center" mt={8}>
          <AbsoluteCenter top={8} zIndex={1}>
            <Box
              ml="-2px"
              h={16}
              w={1}
              bgGradient="linear-gradient(to-b, gray.50, transparent)"
            />
          </AbsoluteCenter>
          <Box
            position="relative"
            left="-1px"
            h={16}
            borderLeftWidth="1px"
            borderColor="gray.400"
            borderStyle="dashed"
          />
          <Box position="relative" bg="gray.50" p={3}>
            <AbsoluteCenter>
              <Circle
                bgGradient="linear-gradient(to-br, gray.600, gray.300)"
                size={4}
              />
            </AbsoluteCenter>
            <AbsoluteCenter>
              <Circle bg="gray.50" size={3} />
            </AbsoluteCenter>
          </Box>
        </Stack>
      </Show>

      <Box py={{ lg: 16 }}>
        <Show below="lg">
          {props.flipContentOnMobile ? props.rightContent : props.leftContent}
        </Show>
        <Show above="lg">{props.leftContent}</Show>
      </Box>

      {/* Desktop dashed line */}
      <Show above="lg">
        <Stack position="relative" spacing={0} alignItems="center">
          {props.isFirst && (
            <AbsoluteCenter top={8}>
              <Box
                h="4.5rem"
                w={1}
                bgGradient="linear-gradient(to-b, gray.50, transparent)"
              />
            </AbsoluteCenter>
          )}
          <Box
            h="full"
            borderLeftWidth="1px"
            borderColor="gray.400"
            borderStyle="dashed"
          />
          <AbsoluteCenter top={props.markerPos}>
            <Box bg="gray.50" p={3}>
              <AbsoluteCenter>
                <Circle
                  bgGradient="linear-gradient(to-br, gray.600, gray.300)"
                  size={4}
                />
              </AbsoluteCenter>
              <AbsoluteCenter>
                <Circle bg="gray.50" size={3} />
              </AbsoluteCenter>
            </Box>
          </AbsoluteCenter>
        </Stack>
      </Show>

      <Box py={{ lg: 16 }}>
        <Show below="lg">
          {props.flipContentOnMobile ? props.leftContent : props.rightContent}
        </Show>
        <Show above="lg">{props.rightContent}</Show>
      </Box>
    </SimpleGrid>
  );
};

Subsection.Content = Content;

export default Subsection;
