import React from 'react';
import './Header.css';
import { CiSearch } from "react-icons/ci";

function Header({ username }) {
  return (
    <header className="header">
      <div className='logo-body'>
        <img href="/" className='logo' alt='logo' src="../img/logo.png"></img>
        <div className="width-panel">
          <div className="panel">
            <div className='search-box'>
              <input type="text" className="search-input-header" placeholder="Пошук..." />
              <CiSearch />
            </div>
            <button className="directory-button">Телефонний довідник</button>
          </div>

        </div>
      </div>
      <nav className="nav-links">
        <div className='link-container'>
          <a href="/contacts" className="nav-link">Контакти</a>
        </div>
      </nav>

      <div className="user-panel">
        <span className="welcome-text">Welcome {username}</span>
        <div className="triangle"></div>
      </div>
    </header>
  );
}

export default Header;
