import React from "react";
import Header from "../Header/Header.js";
import { CiSearch } from "react-icons/ci";
import Card from "../component/Card.js";

export default function Page({handleDeleteSelected,searchTerm,handleSearchChange,filteredData,handleCardSelect,selectedIds}) {
  return (
    <>
    <Header />
    <div className="relative-container">
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
            <button className="directory-button">
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
              <a href="/" className="telephone-click">
                Телефонний довідник
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="telephone">
        <a className="text">Телефонний довідник</a>
        <h4 className="textsmall">
          забезпечує пошук даних в телефонному довіднику
        </h4>
      </div>
      <div className="toolbar">
        <button className="add">
          Додати інформацію
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.88889 1H1.77778C1.34822 1 1 1.34822 1 1.77778V4.88889"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.88889 15H1.77778C1.34822 15 1 14.6518 1 14.2222V11.1111"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.1111 15H14.2222C14.6518 15 15 14.6518 15 14.2222V11.1111"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.1111 1H14.2222C14.6518 1 15 1.34822 15 1.77778V4.88889"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.1111 8H4.88892"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 11.1111V4.88889"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="remove" onClick={handleDeleteSelected}>
          Видалити
          <svg
            className="svg-remove"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L10.3333 10.3333"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 10.3333L10.3333 1"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="search-container">
          <input
            type="text"
            placeholder=""
            value={searchTerm}
            onChange={handleSearchChange}
            className="search"
          />
          <div className="search-icon">
            <CiSearch />
          </div>
        </div>
      </div>
      <div className="cards-container">
        {filteredData.map((abonent, index) => (
          <Card
            key={index}
            abonent={abonent}
            onSelect={handleCardSelect}
            selected={selectedIds.includes(abonent.abonent_id)}
          />
        ))}
      </div>
    </div>
    </>
  );
}
