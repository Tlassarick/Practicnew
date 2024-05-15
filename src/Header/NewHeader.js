import React from "react";

function NewHeader() {
  return (
    <header>
      <nav className="nav-links">
        <div className="link-container">
          <a href="/contacts" className="nav-link">
            Головна сторінка
          </a>
          <a href="/contacts" className="nav-link">
            Законодавство
          </a>
          <a href="/contacts" className="nav-link">
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