import React from 'react';
import './00_Navbar.css'; // Ensure you create this CSS file for styling




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">MyWebsite</a>
      </div>
      <ul className="navbar-links">
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
