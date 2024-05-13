import React, { useEffect, useState } from 'react';
import Card from './component/Card.js';
import Header from './Header/Header.js';
import './App.css'
import { CiSearch } from "react-icons/ci";

function App() {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const handleAddClick = () => {
    // Логика добавления информации
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleDeleteSelected = async (selectedIds) => {
  };
  const handleCardSelect = (id, isSelected) => {
    setSelectedIds(prevIds =>
      isSelected ? [...prevIds, id] : prevIds.filter(prevId => prevId !== id)
    );
  };
  const filteredData = data.filter(item => {
    return Object.keys(item).some(key => {
      if (typeof item[key] === 'string') {
        return item[key].toLowerCase().includes(searchTerm.toLowerCase());
      } else if (typeof item[key] === 'number') {
        return item[key].toString().includes(searchTerm);
      }
      return false;
    });
  });
  useEffect(() => {
    fetch('http://localhost:3001')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data.abonent); // Убедитесь, что вы обращаетесь к правильному ключу в вашем JSON
      })
      .catch(error => {
        console.error('Error fetching abonents:', error);
      });
  }, []);

  return (

    <div className="App">
      <Header />
      <div className="telephone">
        <a className='text'>Телефонний довідник</a>
        <h4 className='textsmall'>забезпечує пошук даних в телефонному довіднику</h4>
      </div>
      <div className="toolbar">
        <button className='add' onClick={handleAddClick}>Додати інформацию</button>
        <button className='remove' onClick={handleDeleteSelected}>Видалити</button>
        <div className='search-container'>
          <input
            type="text"
            placeholder=""
            value={searchTerm}
            onChange={handleSearchChange}
            className='search'
          />
          <div className="search-icon"><CiSearch /></div>
        </div>
      </div>
      <div className="cards-container">

        {filteredData.map((abonent, index) => (
          <Card key={index} abonent={abonent} onSelect={handleCardSelect} selected={selectedIds.includes(abonent.abonent_id)} />
        ))}
      </div>
    </div>
  );
}



export default App;