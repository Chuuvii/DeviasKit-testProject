import React from 'react'

import './Header.css';
import logo from './images/logo.png';
import bell from './icons/bell.svg';
import exit from './icons/exit.svg';

function Header() {
  return (
    <div>
      <div className="App-header">
        <h1 className="App-text">Devias Kit</h1>
        <img className ="App-logo" src={logo} alt="logo"/>
        
        <form className="App-link-form" ></form>
        <button className="Button" onclick='window.location.href="https://devias.io/products/devias-kit-pro";'> FREE </button> 
        <a className="Link-text" href="https://devias.io/products/devias-kit-pro">See our PRO version for more design components & coded in React follow this link: https://devias.io/products/devias-kit-pro</a>
        
        <a href="#"><img className="Bell" src={bell} alt="notification" /></a>
        <a href="#"><img className="Exit" src={exit} alt="log out from account" /></a>
      </div>
    </div>
  );
}

export default Header;