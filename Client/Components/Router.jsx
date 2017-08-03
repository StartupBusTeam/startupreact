import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './Splashpage/App';
import Err from './Nav/error';
import Nav from './Nav/nav';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/contact';
import MRH_LOGO from './assets/MRH.png';
import Category from  './pages/Category'
import Bio from 'pages/Bio.jsx';

class Approutes extends React.Component {
  constructor() {
    super();
    this.state = {
      category: 'Miscellaneous',
    };
    this.selectCategory = this.selectCategory.bind(this);
  }
  selectCategory(category) {
    this.setState({
      category,
    });
  }
  render() {
    return (
      <BrowserRouter
        history={createHistory}
      >
        <div className="app">
          <img className="header" alt="MRHLogo" src={MRH_LOGO} />
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <App selectCategory={this.selectCategory} />} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/category" render={() => <Category category={this.state.category} />} />
            <Route path="/bio" component={Bio} />
            <Route path="*" exact component={App} />
          </Switch>
          <section className="thevoid" />
        </div>
      </BrowserRouter>
    );
  }
}

export default Approutes;
