/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Stack } from '@chakra-ui/react';
import { PostProps } from '../../../lib/studio/types';
import { PortableText } from '../../core';
import _BlogPageNavigation from './_BlogPageNavigation';

/**
 * Component that displays the main blog content.
 */
const _BlogPageMain = (props: Omit<PostProps, 'coverPhoto'>) => {
  return (
    <Stack spacing={16} maxW="6xl" w="full">
      <Stack spacing={8} maxW="4xl" w="full" mx="auto" alignSelf="center">
        <_BlogPageNavigation content={props.content} />
        {/* @ts-ignore */}
        <PortableText value={props.content} />
      </Stack>
    </Stack>
  );
};

export default _BlogPageMain;
