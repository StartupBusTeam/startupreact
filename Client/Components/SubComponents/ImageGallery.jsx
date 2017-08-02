import React from 'react';
import Realdeal from '../assets/real-deal-logo.png';

const image = {
  source: Realdeal,
  category: 'category',
};

const ImageGallery = ({ images, selectCategory }) => (
  <article className="imageGallery">
    {images.map(ima => (
        <img
          onClick={() => selectCategory(image.category)}
          role="presentation"
          className="craftImage"
          alt="craftImage"
          value={image.category}
          src={image.source}
          key={ima}
        />
    ))}
  </article>
);

export default ImageGallery;
