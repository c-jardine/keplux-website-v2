import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { PortableTextBlock } from '@portabletext/types';
import { FaChevronRight } from '@react-icons/all-files/fa/FaChevronRight';
import { format } from 'date-fns';
import React from 'react';
import { urlForImage } from '../../../lib/studio';
import { PostProps } from '../../../lib/studio/types';
import { PortableText } from '../../core';

/**
 * Header component to display the post's cover photo.
 */
const _BlogPageHeader = (props: Pick<PostProps, 'coverPhoto'>) => {
  return (
    <Image
      src={urlForImage(props.coverPhoto).url()}
      alt={props.coverPhoto.caption}
      mx="auto"
      maxW="8xl"
      w="full"
      maxH="xl"
      h="full"
      objectFit="cover"
    />
  );
};

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

/**
 * Component that displays the main blog content.
 */
const _BlogPageMain = (props: Omit<PostProps, 'coverPhoto'>) => {
  const [publishedOn, setPublishedOn] = React.useState<string>(null);

  React.useEffect(() => {
    let date: string;
    if (props.publishedOn) {
      const [year, month, day] = props.publishedOn.split('-');
      date = format(
        new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
        'MMMM dd, yyyy'
      );
      setPublishedOn(date);
    } else {
      date = format(new Date(props._createdAt), 'MMMM dd, yyyy');
    }
    setPublishedOn(date);
  }, [props.publishedOn, props._createdAt]);

  return (
    <Stack spacing={16} maxW="6xl" w="full">
      <Divider borderWidth={2} borderColor="brand.600" />
      <Stack spacing={4}>
        {props.postSeries && <_BlogPageSeries postSeries={props.postSeries} />}
        <Heading as="h1" size="3xl">
          {props.title}
        </Heading>
        <Box>
          <Text
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wider"
            fontWeight="semibold"
          >
            {props.author.name}
          </Text>
          <Text fontSize="xs" color="gray.500">
            {publishedOn}
          </Text>
        </Box>
      </Stack>
      <Divider borderWidth={2} borderColor="brand.600" />

      <Stack spacing={8} maxW="4xl" w="full" mx="auto" alignSelf="center">
        <_BlogPageNavigation content={props.content} />
        <PortableText value={props.content} />
      </Stack>
    </Stack>
  );
};

/**
 * Section showing what series the post belongs to, if any.
 */
const _BlogPageSeries = (props: Pick<PostProps, 'postSeries'>) => {
  return (
    <Flex gap={2} alignItems="center">
      <Text
        bg="gray.200"
        color="gray.600"
        fontSize="sm"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
        rounded="md"
        px={2}
        py={1}
      >
        Series
      </Text>
      <Link>{props.postSeries.title}</Link>
    </Flex>
  );
};

/**
 * Card component containing the author's information.
 */
const _BlogPageAuthorCard = (props: Pick<PostProps, 'author'>) => {
  const { author } = props;
  return (
    <Card h="fit-content">
      <CardHeader>
        <Flex flexDirection="column" alignItems="center" gap={4}>
          <Avatar src={urlForImage(author.avatar).url()} name={author.name} />
          <Text
            fontSize="lg"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            {author.name}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{author.bio}</Text>
      </CardBody>
      <CardFooter>
        <Text>Placeholder for social links</Text>
      </CardFooter>
    </Card>
  );
};

/**
 * The main blog page wrapper.
 */
const BlogPageLayout = (props: PostProps) => {
  return (
    <Container as={Stack} spacing={16} my={16} alignItems="center" maxW="8xl">
      <_BlogPageHeader coverPhoto={props.coverPhoto} />
      <_BlogPageMain {...props} />
      <_BlogPageAuthorCard author={props.author} />
    </Container>
  );
};

export default BlogPageLayout;
