import React from "react";

function NewHeader() {
  return (
    <header>
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
    </header>
  );
}

export default NewHeader;