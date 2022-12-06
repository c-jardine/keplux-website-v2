import { Image } from '@chakra-ui/react';
import { urlForImage } from '../../../lib/studio';
import { PostProps } from '../../../lib/studio/types';

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

export default _BlogPageHeader;
