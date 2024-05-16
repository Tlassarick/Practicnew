import React from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";

function Header({ username }) {
  return (
    <header className="header">
      <div className="logo-body">
        <img
          href="/"
          className="logo"
          alt="logo"
          src="	https://kyivobl.tax.gov.ua/img/gerb.svg"
        />
        <span className="logo-text">
          Головне управління ДПС у Київській області
        </span>
      </div>
      <nav className="nav-links">
        <div className="link-container">
          <a href="/contacts" className="nav-link-tele">
            Контакти
          </a>
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
