import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  List,
  Box,
  ListItem,
  ListIcon,
  Text,
} from '@chakra-ui/react';
import type { PortableTextBlock } from '@portabletext/types';

import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
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
              <>
                {block.style === 'h2' && (
                  <ListItem key={block._key} display="flex" alignItems="center">
                    <ListIcon
                      as={FaChevronRight}
                      w={3}
                      h={3}
                      color="brand.500"
                    />
                    <Link
                      href={`#${block._key}`}
                      fontSize="sm"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      lineHeight="taller"
                      color="brand.500"
                    >
                      {block.children[0].text}
                    </Link>
                  </ListItem>
                )}
                {block.style === 'h3' && (
                  <ListItem
                    key={block._key}
                    display="flex"
                    alignItems="center"
                    gap={1.5}
                    ml={4}
                    lineHeight="shorter"
                  >
                    <Text>&bull;</Text>
                    <Link
                      href={`#${block._key}`}
                      fontSize="xs"
                      letterSpacing="wide"
                      color="gray.700"
                    >
                      {block.children[0].text}
                    </Link>
                  </ListItem>
                )}
              </>
            ))}
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default _BlogPageNavigation;
