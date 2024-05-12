import React, { useEffect, useState } from 'react';
import Card from './component/Card.js';
import Header from './Header/Header.js';
import './App.css'

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
  const handleDeleteSelected = async (abonentIds) => {
    abonentIds.forEach(async (abonent_id) => {
      try {
        await fetch(`http://localhost:3001`, { method: 'DELETE' });
        setData(currentData => currentData.filter(abonent => abonent.abonent_id !== abonent_id));
      } catch (error) {
        console.error('Error deleting abonent:', error);
      }
    });
  };
  const handleCardSelect = (id, isSelected) => {
    setSelectedIds(prevIds =>
      isSelected ? [...prevIds, id] : prevIds.filter(prevId => prevId !== id)
    );
  };
  const filteredData = searchTerm
    ? data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : data;

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
      <div className="toolbar">
        <button onClick={handleAddClick}>Добавить информацию</button>
        <button onClick={handleDeleteSelected}>Удалить выбранные</button>
        <input
          type="text"
          placeholder="Поиск..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="cards-container">
      {data.map((abonent, index) => (
        <Card key={index} abonent={abonent}onSelect={handleCardSelect} selected={selectedIds.includes(abonent.id)} />
      ))}
      </div>
    </div>
  );
}



export default App;