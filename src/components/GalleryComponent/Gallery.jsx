import React from 'react';
import { PhotoProvider } from 'react-photo-view';
import ImageItem from './ImageItem';

const Gallery = ({ images }) => {
  return (
    <PhotoProvider>
      <div className='gallery-photo'>
        {images.map((image, index) => (
          <ImageItem key={index} src={image.src} alt={image.alt} thumb={image.thumb}/>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
