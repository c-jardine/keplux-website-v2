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
import Link from 'next/link';
import { PostProps } from '../../../lib/studio/types';

const _BlogPageNavigation = (props: Pick<PostProps, 'content'>) => {
  const { content }: { content: PortableTextBlock[] } = props;

  const tags: string[] = ['h2', 'h3'];
  const headerBlocks: PortableTextBlock[] = content.filter(
    (block: PortableTextBlock) => tags.includes(block.style)
  );

  return (
    <Accordion allowToggle>
      <AccordionItem
        bg="brand.100"
        flexDirection="column"
        borderWidth={1}
        borderColor="brand.200"
      >
        <AccordionButton px={{ base: 4, md: 8 }} py={4}>
          <Box>
            <Text
              fontSize="xl"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
              color="brand.600"
            >
              Jump to section
            </Text>
          </Box>
        </AccordionButton>
        <AccordionPanel bg="brand.50">
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
                    color="gray.700"
                    w="fit-content"
                  >
                    <Link href={`#${block._key}`} role="group">
                      {block.children[0].text}
                      <Box
                        position="absolute"
                        bottom={0}
                        h={1}
                        w="full"
                        bg="gray.500"
                        transform="scaleY(0%)"
                        transformOrigin="top"
                        _groupHover={{ transform: 'scaleY(100%)' }}
                        transition="200ms ease-in-out"
                      />
                    </Link>
                  </ListItem>
                )}
                {block.style === 'h3' && (
                  <ListItem
                    display="flex"
                    alignItems="center"
                    ml={2}
                    fontSize="sm"
                    letterSpacing="wide"
                    color="gray.600"
                  >
                    <ListIcon as={FaCircle} w={1} h={1} />
                    <Link href={`#${block._key}`}>
                      {block.children[0].text}
                    </Link>
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
