import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import SearchFilters from '../SubComponents/SearchFilters';
import ImageGallery from '../SubComponents/ImageGallery';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category,
      photos: []
    };
    this.getPhotos = this.getPhotos.bind(this);
  }
  componentWillMount() {
    this.setState({
      photos: _.range(1, 22),
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
    //     photos: data,
    //   });
    // })
    // .catch(err => console.error(err));
  }
  render() {
    return (
      <section className="categoryPage">
        <SearchFilters category={this.state.category} />
        <ImageGallery images={this.state.photos} />
      </section>
    );
  }
}

export default Category;
