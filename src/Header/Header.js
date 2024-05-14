import React from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";

function Header({ username }) {
  return (
    <header className="header">
      <div className="logo-body">
      <img href="/" className="logo" alt="logo" src="https://s3-alpha-sig.figma.com/img/065a/e1c8/f7e649237d3e95c1cadcdc74c00f3978?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TuKEUn3ujSpowuhXlzGWMcVqs08YPl9wqz1tEDxzPWFZxslJQMzdlh4o01nvvBeSwYY0q6u-MWskpLFATCiHRsyQJGB0cx4~hkqUmSoeWjdrNHZTf8hmdq7gBeEhgdBBBErkvgdJawvFeGgVWGNOD-XICbnafTyhzB~CNoGQLpGc4faQqORj6lT~zoYOIx-2k0AQtAvPeQAhaaIZpZtBoXe3MmqOpljaPWWf1P48FfUWkCdJ3izUPt7dPIiLyzn7LtMe4uQEI6m2WksZC~ZhVn9DHaHYcntccowmu9O41s6DXwx2HVP5AMkI~bVUQEkbnh2gtg1WfTqHLLZesJ~nMQ__"></img>
        <div className="width-panel">
          <div className="panel">
            <div className="search-box">
              <input
                type="text"
                className="search-input-header"
                placeholder="Пошук..."
              />
              <div className="search-icon">
                <CiSearch />
              </div>
            </div>
            <div className="directory-box">
            <button className="directory-button" >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path
                  d="M10.066 3.52829V9.13206C10.066 10.1637 8.18438 11 5.8632 11C3.54204 11 1.66037 10.1637 1.66037 9.13206V3.52829"
                  stroke="#EBD27D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.066 6.33018C10.066 7.36179 8.18438 8.19811 5.8632 8.19811C3.54204 8.19811 1.66037 7.36179 1.66037 6.33018"
                  stroke="#EBD27D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.066 3.52829C10.066 4.5599 8.18438 5.39622 5.8632 5.39622C3.54204 5.39622 1.66037 4.5599 1.66037 3.52829C1.66037 2.49667 3.54204 1.66037 5.8632 1.66037C8.18438 1.66037 10.066 2.49667 10.066 3.52829Z"
                  fill="#FFEA2F"
                  stroke="#EBD27D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.7358 2.59433H17.5377C18.5693 2.59433 19.4057 3.43063 19.4057 4.46225V7.26414"
                  stroke="#EBD27D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.26414 19.4057H4.46225C3.43063 19.4057 2.59433 18.5693 2.59433 17.5377V14.7358"
                  stroke="#EBD27D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.1368 15.6698C17.4263 15.6698 18.4717 14.6244 18.4717 13.3349C18.4717 12.0454 17.4263 11 16.1368 11C14.8473 11 13.8019 12.0454 13.8019 13.3349C13.8019 14.6244 14.8473 15.6698 16.1368 15.6698Z"
                  fill="#FFEA2F"
                  stroke="#EBD27D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.3396 20.3396H11.934C11.934 18.0184 13.8156 16.1368 16.1368 16.1368C18.458 16.1368 20.3396 18.0184 20.3396 20.3396Z"
                  fill="#FFEA2F"
                  stroke="#EBD27D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="/" className="telephone-click">Телефонний довідник</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="nav-links">
        <div className="link-container">
          <a href="/contacts" className="nav-link">
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
