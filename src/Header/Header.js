import React from 'react';
import './Header.css';

function Header({ username }) {
  return (
    <header className="header">
      <div className='logo-body'>
        <img href="/" className='logo' alt='logo' src="../img/logo.png"></img>
        <div className="width-panel">
          <div className="panel">
            <input type="text" className="search-input-header" placeholder="Пошук..." />
            <button className="directory-button">Телефонний довідник</button>
          </div>

        </div>
      </div>
      <nav className="nav-links">
        <a href="/contacts" className="nav-link">Контакти</a>
      </nav>

      <div className="user-panel">
        <span className="welcome-text">Welcome, {username}</span>
        <div className="triangle"></div>
      </div>
    </header>
  );
}

export default Header;
