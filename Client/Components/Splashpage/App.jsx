import React from 'react';
import JumboTron from './JumboTron';
import Selections from './selections';
import ImageGallery from '../SubComponents/ImageGallery'
import Realdeal from '../assets/real-deal-logo.png';
class App extends React.Component {
  constructor({ selectCategory }) {
    super({ selectCategory });
    this.state = {
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      blowUp: Realdeal,
    };
    this.selectCategory = selectCategory;
  }
  render() {
    return (
      <section className="app" >
        <main className="row mainBox">
          <section className="col-md-6 blowupBox">
            <img className="blowupImage" alt="blowupImage" src={Realdeal} />
          </section>
          <section className="col-md-6">
            <ImageGallery selectCategory={this.selectCategory} images={this.state.images} />
          </section>
        </main>
      </section>
    );
  }
}

export default App;
