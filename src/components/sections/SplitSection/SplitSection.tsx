import { Box, SimpleGrid, StyleProps } from '@chakra-ui/react';
import React from 'react';

const LeftContent = (props: { children: React.ReactNode }) => {
  return <Box>{props.children}</Box>;
};

const RightContent = (props: { children: React.ReactNode }) => {
  return <Box>{props.children}</Box>;
};

const SplitSection = (props: {
  children: React.ReactNode;
  containerStyle?: StyleProps;
}) => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} {...props.containerStyle}>
      {props.children}
    </SimpleGrid>
  );
};

SplitSection.LeftContent = LeftContent;
SplitSection.RightContent = RightContent;

export default SplitSection;
