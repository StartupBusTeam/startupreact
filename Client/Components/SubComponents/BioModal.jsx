import React from 'react';
import { Link } from 'react-router-dom'
import history from 'react-router-dom';
import { craftStory } from '../assets/projectdata';

const BioModal = ({ story, owner, closeModal }) => (
  <article className="row artModal">
    <button
      className="glyphicon glyphicon-remove-sign"
      onClick={closeModal}
    />
    <button>Add to this Timeline </button>
    {craftStory.map((chapter, ind) => {
      if (ind % 2 === 0) {
        return (
          <article key={chapter.step} className="personals">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                  <img className="media-object bioModalImage" src={chapter.image} alt={ind} />
              </div>
              <div className="col-xs-12 col-md-6 personaltext">
                <h1 className="media-heading">{chapter.step}</h1>
                <h4>{chapter.description}</h4>
              </div>
            </div>
          </article>
        );
      }
      return (
        <article key={chapter.step} className="personals">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h1 className="media-heading">{chapter.step}</h1>
              <h4>{chapter.description}</h4>
            </div>
            <div className="col-xs-12 col-md-6">
                <img className="media-object bioModalImage" src={chapter.image} alt={ind} />
            </div>
          </div>
        </article>
      );
    })}
  </article>
);

export default BioModal;
