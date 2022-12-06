import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import React from 'react';
import { PostProps } from '../../../lib/studio/types';
import { PortableText } from '../../core';
import _BlogPageNavigation from './_BlogPageNavigation';
import _BlogPageSeries from './_BlogPageSeries';

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

export default _BlogPageMain;
