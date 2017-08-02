import React from 'react';
import axios from 'axios';
import _ from 'lodash';

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
        <section className="selectionBar">
          {/* // TODO make navbar for component selection */}
          <h4>{ this.state.category }</h4>
        </section>
        <ImageGallery images={this.state.photos} />
      </section>
    );
  }
}

export default Category;
