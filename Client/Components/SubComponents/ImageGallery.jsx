import React from 'react';
import { Link } from 'react-router-dom';

import Realdeal from '../assets/real-deal-logo.png';
import _ from 'lodash'
const image = {
  source: Realdeal,
  category: 'category',
};

const ImageGallery = ({ images,
  selectCategory ,
  fromCategory
}) => {
  if (!fromCategory) {
    return (
      <article className="imageGallery">
        {images.map(ima => (
          <Link
            key={ima}
            to="/category"
            onClick={() => selectCategory(image.category)}
          >
            <img
              role="presentation"
              className="craftImage"
              alt="craftImage"
              value={image.category}
              src={image.source}
            />
          </Link>
        ))}
      </article>
    );
  }
  return (
    <article className="imageGallery">
      {images.map(ima => (
        <button>
          <img
            role="presentation"
            className="craftImage"
            alt="craftImage"
            value={image.category}
            src={image.source}
            key={ima}
          />
        </button>
      ))}
    </article>
  );
};

// TODO proptypes;

export default ImageGallery;
