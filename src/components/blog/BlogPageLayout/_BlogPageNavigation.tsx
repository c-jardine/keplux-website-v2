/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import type { PortableTextBlock } from '@portabletext/types';
import { FaCircle } from '@react-icons/all-files/fa/FaCircle';
import { PostProps } from '../../../lib/studio/types';
import { KLink } from '../../core';

const _BlogPageNavigation = (props: Pick<PostProps, 'content'>) => {
  // @ts-ignore
  const { content }: { content: PortableTextBlock[] } = props;

  const tags: string[] = ['h2', 'h3'];
  const headerBlocks: PortableTextBlock[] = content.filter(
    (block: PortableTextBlock) => tags.includes(block.style)
  );

  return (
    <Accordion allowToggle>
      <AccordionItem
        bg="brand.900"
        flexDirection="column"
        borderWidth={1}
        borderColor="brand.400"
      >
        <AccordionButton px={{ base: 4, md: 8 }} py={4}>
          <Box>
            <Text
              fontSize="xl"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              color="brand.400"
            >
              Jump to section
            </Text>
          </Box>
        </AccordionButton>
        <AccordionPanel bg="black">
          <List mt={2}>
            {headerBlocks.map((block) => (
              <Box key={block._key}>
                {block.style === 'h2' && (
                  <ListItem
                    position="relative"
                    display="flex"
                    alignItems="center"
                    fontSize="sm"
                    fontWeight="bold"
                    letterSpacing="wide"
                    lineHeight="taller"
                    color="whiteAlpha.800"
                    w="fit-content"
                  >
                    <KLink href={`#${block._key}`} role="group">
                      {block.children[0].text}
                      <Box
                        position="absolute"
                        bottom={0}
                        h={1}
                        w="full"
                        bg="whiteAlpha.600"
                        transform="scaleY(0%)"
                        transformOrigin="top"
                        _groupHover={{ transform: 'scaleY(100%)' }}
                        transition="200ms ease-in-out"
                      />
                    </KLink>
                  </ListItem>
                )}
                {block.style === 'h3' && (
                  <ListItem
                    display="flex"
                    alignItems="center"
                    ml={2}
                    fontSize="sm"
                    letterSpacing="wide"
                    color="whiteAlpha.600"
                  >
                    <ListIcon as={FaCircle} w={1} h={1} />
                    <KLink href={`#${block._key}`}>
                      {block.children[0].text}
                    </KLink>
                  </ListItem>
                )}
              </Box>
            ))}
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default _BlogPageNavigation;
