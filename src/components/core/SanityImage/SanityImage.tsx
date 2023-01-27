import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import { client } from '../../../studio/client';
import { SanityImageProps } from './SanityImage.types';

const SanityImage = (props: SanityImageProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line
  const imageProps: { src: string } = useNextSanityImage(client, props.image);
  return (
    <Image
      {...imageProps}
      alt={props.caption}
      style={{ width: '100%', height: 'auto' }}
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
};

export default SanityImage;
