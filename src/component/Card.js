import React from "react";
import  { useState } from "react";

function Card({ abonent, onSelect, selected }) {
  const [isSelected, setIsSelected] = useState(selected);

  const toggleSelect = () => {
    const newSelectedState = !isSelected;
    setIsSelected(newSelectedState);
    onSelect(abonent.id, newSelectedState);
  };
  return (
    <div className="card">
            <div className="selection-box" onClick={toggleSelect}>
        {isSelected ? "✖" : ""}
      </div>
      <div className="card-pib">{abonent.pib.replace(/\?/g, "і")}</div>
      <div className="card-position">
        {String(abonent.position).replace(/\?/g, "і")}
      </div>
      <div className="card-unit-name">
        {String(abonent.unit_name).replace(/\?/g, "і")}
      </div>
      <div className="card-working-room">
        {String(abonent.working_room).replace(/\?/g, "і")}
      </div>
      <div className="card-abonent-number">
        {String(abonent.abonent_number).replace(/\?/g, "і")}
      </div>
    </div>
  );
}
export default Card;
