import React, { useEffect, useState } from 'react';
import Card from './component/Card.js';
import Header from './Header/Header.js';
import './App.css'

function App() {
  const [data, setData] = useState([]);

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
      {data.map((abonent, index) => (
        <Card key={index} abonent={abonent} />
      ))}
    </div>
  );
}



export default App;