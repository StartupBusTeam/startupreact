import React from 'react';
import ImageGallery from '../SubComponents/ImageGallery'
import Realdeal from '../assets/real-deal-logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artpieces: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      blowUp: Realdeal,
    };
    console.log(props)
  }
  render() {
    return (
      <section className="app" >
        <main className="row mainBox">
          <section className="col-md-6 blowupBox">
            <img className="blowupImage" alt="blowupImage" src={Realdeal} />
          </section>
          <section className="col-md-6">
            <ImageGallery selectCategory={this.props.selectCategory} artpieces={this.state.artpieces} />
          </section>
        </main>
      </section>
    );
  }
}

export default App;
