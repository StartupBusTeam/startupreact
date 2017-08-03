import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import SearchFilters from '../SubComponents/SearchFilters';
import ImageGallery from '../SubComponents/ImageGallery';
import ArtPieceModal from '../SubComponents/ArtPieceModal'
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      artpieces: [],
      selectedArtPiece: null,
      modalOpen: true,
    };
    this.getPhotos = this.getPhotos.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  componentWillMount() {
    this.setState({
      artpieces: _.range(1, 22),
    });
    this.getPhotos();
  }
  getPhotos(category = this.state.category) {
    //  TODO: uncomment when the we have data;
    // const options = {
    //   uri: 'http://localhost:8080',
    //   method: 'GET',
    //   params: {
    //     category,
    //   },
    // };
    // axios(options)
    // .then(({ data }) => {
    //   this.setState({
    //     artpieces: data,
    //   });
    // })
    // .catch(err => console.error(err));
  }
  openModal(selectedArtPiece = null) {
    this.setState({
      selectedArtPiece,
      modalOpen: !this.state.modalOpen,
    });
  }
  render() {
    return (
      <section className="categoryPage">
        <SearchFilters category={this.state.category} />
        {!this.state.modalOpen ?
          (<ImageGallery artpieces={this.state.artpieces} fromCategory={'category'} openModal={this.openModal} />)
        : (
          <ArtPieceModal history={this.props.history} artpiece={this.state.selectedArtPiece} />
        )}
      </section>
    );
  }
}

export default Category;
