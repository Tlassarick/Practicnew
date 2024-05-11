import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/abonents')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        // Ensure the response is of type JSON before attempting to parse
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError("Received non-JSON response from server");
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching abonents:', error);
      });
  }, []);

  return (
    <div className="App">
      {data.map((abonent, index) => (
        <Card key={index} abonent={abonent} />
      ))}
    </div>
  );
}

function Card({ abonent }) {
  return (
    <div className="card">
      <h2>{abonent.pib}</h2>
      <p>{abonent.position}</p>
      <p>{abonent.unit_name}</p>
      <p>{abonent.working_room}</p>
    </div>
  );
}

export default App;