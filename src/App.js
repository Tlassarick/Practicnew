import React, { useEffect, useState } from "react";
import "./App.css";
import NewPage from "./pages/NewPage.js";
import Page from "./pages/Page.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddClick = () => { };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleDeleteSelected = async (selectedIds) => { };
  const handleCardSelect = (id, isSelected) => {
    setSelectedIds((prevIds) =>
      isSelected ? [...prevIds, id] : prevIds.filter((prevId) => prevId !== id)
    );
  };
  const filteredData = data.filter((item) => {
    return Object.keys(item).some((key) => {
      if (typeof item[key] === "string") {
        return item[key].toLowerCase().includes(searchTerm.toLowerCase());
      } else if (typeof item[key] === "number") {
        return item[key].toString().includes(searchTerm);
      }
      return false;
    });
  });
  useEffect(() => {
    fetch("http://localhost:3001")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok, status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setData(data.abonent);
      })
      .catch((error) => {
        console.error("Error fetching abonents:", error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<NewPage />} />
          <Route  path="/abonent" element={<Page selectedIds={selectedIds} handleDeleteSelected={handleDeleteSelected} searchTerm={searchTerm} handleSearchChange={handleSearchChange}filteredData={filteredData}handleCardSelect={handleCardSelect} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
