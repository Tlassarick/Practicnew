import React from "react";

function Card({ abonent }) {
  return (
    <div className="card">
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
