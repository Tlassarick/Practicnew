import React from 'react';
import './Header.css';

function Header({ username }) {
  return (
    <header className="header">
        <div className='logo-body'>
          <img href="/" className='logo' alt='logo' src="./img/logo.png"></img>
      </div>
      <nav className="nav-links">
        <a href="/contacts" className="nav-link">Контакти</a>
        
      </nav>
      <div className="user-panel">Welcome, {username}</div>
    </header>
  );
}

export default Header;
