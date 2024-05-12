import React from "react";
import "./Header.css";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="" height={100} width={250} alt="Logo" />
          <a className="logo-font">АльоГараж</a>
        </div>
        <nav>
          <ul>
            <li className="nav-button">
              <a href="#" className="nav-name">
                Home
              </a>
            </li>
            <li className="nav-button">
              <a href="#" className="nav-name">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="user">
          <p>Welcome, John Doe</p>
        </div>
      </div>
    </header>
  );
}
export default Header;
