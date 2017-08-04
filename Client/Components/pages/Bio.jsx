import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import ArtPieces from '../assets/projectdata';
import ImageGallery from '../SubComponents/ImageGallery';
import BioModal from '../SubComponents/BioModal';

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ArtPieces.artistBio,
      artPieces: [ArtPieces.woodenSpoon].concat(ArtPieces.data),
      bioModalOpen: false,
      selectedStory: {},
    };
    // this.getPhotos = this.getPhotos.bind(this);
    this.toggleBioModal = this.toggleBioModal.bind(this);
  }
  componentWillMount() {
    //  TODO: uncomment when the we have data;
    // const options = {
    //   uri: 'http://localhost:8080',
    //   method: 'GET',
    //   params: {
    //     artist: this.props.artist
    //   },
    // };
    // axios(options)
    // .then(({ data }) => {
    //   this.setState({
    //     artist: data.artist,
    //     artPieces: data.artPieces,
    //   });
    // })
    // .catch(err => console.error(err));
  }
  toggleBioModal(index) {
    this.setState({
      bioModalOpen: !this.state.bioModalOpen,
      selectedStory: this.state.artPieces[index],
    });
  }
  render() {
    return (
      <section className="row mainBox bioBox">
        <section className="col-md-3 artistBio" >
          <h4>{this.state.artist.name}</h4>
          <img className="bioPic" alt="bioPic" src={this.state.artist.image} />
          <p>{this.state.artist.bio}</p>
          <p>Contact info: James@email.com</p>
        </section>
        {!this.state.bioModalOpen?
          (<secton className="col-md-9 bioArt">
            {this.state.artPieces.map((artpiece, ind ) => (
              <button
                className="craftLink"
                key={artpiece.category}
                onClick={() => this.toggleBioModal(ind)}
              >
                <img
                  role="presentation"
                  className="craftImage"
                  alt="craftImage"
                  src={artpiece.image}
                />
              </button>
            ))}
          </secton>
        ) : <BioModal closeModal={this.toggleBioModal} story={ArtPieces.artistBio} />}
      </section>
    );
  }
}

export default Bio;
