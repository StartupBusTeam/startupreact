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
    {craftStory.map((chapter, ind) => {
      if (ind % 2 === 0) {
        return (
          <article className="personals">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                  <img className="media-object bioModalImage" src={chapter.image} alt={ind} />
              </div>
              <div className="col-xs-12 col-md-6 personaltext">
                <h1 className="media-heading">{chapter.step}</h1>
                <p>{chapter.description}</p>
              </div>
            </div>
          </article>
        );
      }
      return (
        <article className="personals">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h1 className="media-heading">{chapter.step}</h1>
              <p>{chapter.description}</p>
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
