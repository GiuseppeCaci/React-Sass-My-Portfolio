import React from 'react';
import { PhotoView } from 'react-photo-view';

const ImageItem = ({ src, alt,thumb }) => {
  return (
    <PhotoView src={src}>
      <img
        alt={alt}
        src={thumb}
        className="photo-item"  
      />
    </PhotoView>
  );
};

export default ImageItem;