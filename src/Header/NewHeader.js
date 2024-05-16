import React from "react";

function NewHeader() {
  return (
    <header>
      <div className="nav-container">
        <nav className="nav-links-main">
          <div className="link-container">
            <a href="/" className="nav-link">
              Головна сторінка
            </a>
            <a href="/law" className="nav-link">
              Законодавство
            </a>
            <a href="/press" className="nav-link">
              Прес-центр
            </a>
            <a href="/contacts" className="nav-link">
              Контакти
            </a>

          </div>
        </nav>
        <div className="burger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default NewHeader;
