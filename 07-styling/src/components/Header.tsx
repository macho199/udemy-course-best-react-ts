import React from 'react';
import logo from '../assets/logo.png';
import './header.css'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
};

export default Header;
