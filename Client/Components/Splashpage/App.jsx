import React from 'react';
import ImageGallery from '../SubComponents/ImageGallery'
import ArtPieces from '../assets/projectdata';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artpieces: ArtPieces.data,
      blowUp: ArtPieces.data[0].image,
    };
  }
  render() {
    return (
      <section className="app" >
        <main className="row mainBox">
          <section className="col-md-6 blowupBox">
            <img className="blowupImage" alt="blowupImage" src={this.state.blowUp} />
          </section>
          <section className="col-md-6">
            <ImageGallery
              selectCategory={this.props.selectCategory}
              artpieces={this.state.artpieces}
            />
          </section>
        </main>
      </section>
    );
  }
}

export default App;
