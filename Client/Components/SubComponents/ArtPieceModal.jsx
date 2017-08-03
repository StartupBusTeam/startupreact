import React from 'react';
import { Link } from 'react-router-dom'
import history from 'react-router-dom';

const ArtPieceModal = ({ history, artpiece }) => (
  <article className="row artModal">
    <div className="col-md-9 modalImage">
      <img className="modalImage" alt="art" src={'http://res.cloudinary.com/eperiou/image/upload/v1496279941/spurr2_n2gp8h.png'} />
    </div>
    <section className="col-md-3">
      <Link
        to={{
          pathname: '/artisan',
          state: { artisan: 'artpiece.artisan' },
        }}
      ><h1>Username</h1></Link>
    </section>
  </article>
);

export default ArtPieceModal;
