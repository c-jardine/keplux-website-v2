import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { format } from 'date-fns';
import React from 'react';
import { PostProps } from '../../../studio/types';
import { Tag } from '../../core';
import _BlogPageSeries from './_BlogPageSeries';

/**
 * Header component to display the post's cover photo.
 */
const _BlogPageHeader = (props: PostProps) => {
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
    <Stack alignItems="center" maxW="6xl" spacing={8}>
      <Divider borderWidth={2} borderColor="brand.600" />
      <Stack spacing={4}>
        {props.postSeries && <_BlogPageSeries postSeries={props.postSeries} />}
        <Heading as="h1" size="3xl" color="whiteAlpha.800">
          {props.title}
        </Heading>
        <Box>
          <Text
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wider"
            fontWeight="semibold"
            color="whiteAlpha.800"
          >
            {props.author.name}
          </Text>
          <Text fontSize="xs" color="whiteAlpha.600">
            {publishedOn}
          </Text>
        </Box>
        <Flex gap={4}>
          {props.tags?.map((tag, index) => (
            <Tag key={tag._key || index} {...tag} />
          ))}
        </Flex>
      </Stack>
      <Divider borderWidth={2} borderColor="brand.600" />
    </Stack>
  );
};

export default _BlogPageHeader;
