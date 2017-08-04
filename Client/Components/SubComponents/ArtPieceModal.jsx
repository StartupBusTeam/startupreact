import React from 'react';
import { Link } from 'react-router-dom'
import history from 'react-router-dom';

const ArtPieceModal = ({ history, artpiece }) => (
  <article className="row artModal">
    <div className="col-md-9 modalImage">
      <img className="modalImage" alt="art" src={artpiece.image} />
    </div>
    <section className="col-md-3">
      <h1>{artpiece.name}</h1>
      <h2>Category: {artpiece.category}</h2>
      <Link
        to={{
          pathname: '/bio',
          state: { artisan: 'artpiece.artisan' },
        }}
      ><h2>Visit the Artisan</h2></Link>
    </section>
  </article>
);

export default ArtPieceModal;
