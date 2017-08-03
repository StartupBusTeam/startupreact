import React from 'react';
import { Link } from 'react-router-dom';

import Realdeal from '../assets/real-deal-logo.png';
import _ from 'lodash'
const image = {
  source: Realdeal,
  category: 'category',
};

const ImageGallery = ({
  artpieces,
  selectCategory,
  fromCategory,
  openModal = _.identity,
}) => {
  if (!fromCategory) {
    return (
      <article className="imageGallery">
        {artpieces.map(artpiece => (
          <Link
            key={artpiece}
            to="/category"
            onClick={() => selectCategory(image.category)}
          >
            {/* TODO  Replace with art objec*/}
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
      {artpieces.map(artpiece => (
        <button
          onClick={() => openModal(artpiece)}
        >
          {/* TODO  Replace with art objec*/}
          <img
            role="presentation"
            className="craftImage"
            alt="craftImage"
            value={image.category}
            src={image.source}
            key={artpiece}
          />
        </button>
      ))}
    </article>
  );
};

// TODO proptypes;

export default ImageGallery;
