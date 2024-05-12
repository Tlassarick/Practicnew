import React from 'react'

function Card({ abonent }) {
    return (
      <div className="card">
        <h2>{abonent.pib}</h2><a>{abonent.position}{abonent.unit_name}{abonent.working_room}{abonent.abonent_number}</a>
        
      </div>
    );
  }
export default Card;