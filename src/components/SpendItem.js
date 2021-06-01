import React from 'react';
import "./SpendItem.css";
import SpendDate from "./SpendDate";
import Card from "./Card";

function SpendItem(props) {
  return (
    <Card className="spend-item">
        <SpendDate date={props.date}/>
      <div className="spend-item__description">
        <h2>{props.title}</h2>
        <div className="spend-item__price">{props.pret} RON</div>
      </div>
    </Card>
  );
}
export default SpendItem;
