import React from 'react';
import Realdeal from '../assets/real-deal-logo.png';
const ImageGallery = ({images}) => (
  <article className="imageGallery">
    {images.map(image => (
      <img className="craftImage" alt="craftImage" src={Realdeal} key={image} />
    ))}
  </article>
);

export default ImageGallery;
