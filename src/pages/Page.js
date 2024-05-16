import React from "react";
import Header from "../Header/Header.js";
import { CiSearch } from "react-icons/ci";
import Card from "../component/Card.js";

export default function Page({handleDeleteSelected,searchTerm,handleSearchChange,filteredData,handleCardSelect,selectedIds}) {
  return (
    <div>
      <Header />
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
  );
}
