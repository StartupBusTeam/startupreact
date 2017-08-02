import React from 'react';
import { Link } from 'react-router-dom';
// import realdeal from '../assets/real-deal-logo.png';

const Nav = () => (
  <nav className="navbar">
    <ul className="nav navbar-left nav-tabs">
      <li>
        <Link to="/projects">Portfolio <span className="sr-only">(current)</span></Link>
      </li>
      <li><Link to="/personal">Personal</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
  </nav>
);

export default Nav;
