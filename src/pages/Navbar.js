// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/projects">Projets</Link></li>
      <li><Link to="/skills">Compétences</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
