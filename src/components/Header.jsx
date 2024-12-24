// Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#home">Vasil Bhisti</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
