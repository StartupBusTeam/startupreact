import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const ImageGallery = ({
  artpieces,
  selectCategory,
  fromCategory,
  openModal = _.identity,
}) => {
  console.log(artpieces)
  if (!fromCategory) {
    return (
      <article className="imageGallery">
        {artpieces.map(artpiece => (
          <Link
            className="craftLink"
            key={artpiece.category}
            to="/category"
            onClick={() => selectCategory(artpiece.category)}
          >
            {/* TODO  Replace with art objec*/}
            <img
              role="presentation"
              className="craftImage"
              alt="craftImage"
              value={artpiece.category}
              src={artpiece.image}
            />
          </Link>
        ))}
      </article>
    );
  }
  return (
    <article className="imageGallery">
      {artpieces.map(artpiece => (
        <a
          key={artpiece.category}
          className="craftLink"
          onClick={() => openModal(artpiece)}
        >
          {/* TODO  Replace with art objec*/}
          <img
            role="presentation"
            className="craftImage"
            alt="craftImage"
            value={artpiece.category}
            src={artpiece.image}
          />
        </a>
      ))}
    </article>
  );
};

// TODO proptypes;

export default ImageGallery;
