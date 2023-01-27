import Image from 'next/image';
import 'photoswipe/dist/photoswipe.css';
import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { KLightboxProps } from './KLightbox.types';

const KLightbox = (props: KLightboxProps) => {
  return (
    <Gallery>
      <Item
        original={props.image.src}
        thumbnail={props.image.src}
        width={props.image.width}
        height={props.image.height}
        alt={props.alt}
      >
        {({ ref, open }) => (
          <Image
            style={{
              objectFit: 'cover',
              cursor: 'pointer',
            }}
            src={props.image}
            alt={props.alt}
            ref={ref as React.MutableRefObject<HTMLImageElement>}
            onClick={open}
          />
        )}
      </Item>
    </Gallery>
  );
};

export default KLightbox;
