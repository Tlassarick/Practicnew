import React from 'react';
import './Header.css';

function Header({ username }) {
  return (
    <header className="header">
        <div className='lodo-body'>
      <a href="/" className="logo">Логотип</a>
      </div>
      <nav className="nav-links">
        <a href="/contacts" className="nav-link">Контакти</a>
        {/* Добавьте другие ссылки по мере необходимости */}
      </nav>
      <div className="user-panel">Welcome, {username}</div>
    </header>
  );
}

export default Header;
