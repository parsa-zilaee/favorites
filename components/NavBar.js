import React from 'react';
import HomeButton from './HomeButton';
import logo from '../images/logo.PNG';

const NavBar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Tutoring Academy</h1>
        <HomeButton />
      </div>
    </nav>
  );
};

export default NavBar;