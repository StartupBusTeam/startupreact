import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './Splashpage/App';
import Err from './Nav/error';
import Nav from './Nav/nav';
import Signup from './pages/signup';
// import Login from './pages/Login';
import Contact from './pages/contact';
import MRH_LOGO from './assets/MRH.png';

const Approutes = () =>
  <BrowserRouter
    history={createHistory}
  >
    <div className="app">
      <img className="header" alt="MRHLogo" src={MRH_LOGO} />
      <Nav />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/signup" exact component={Signup} />
        {/* <Route path="/login" exact component={Login} /> */}
        <Route path="/contact" exact component={Contact} />
        <Route path="*" exact component={App} />
        <Route component={Err} />
      </Switch>
      <section className="thevoid" />
    </div>
  </BrowserRouter>;

export default Approutes;
