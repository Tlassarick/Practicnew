import React from 'react'

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
export default Card;