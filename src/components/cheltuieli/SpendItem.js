import React, {useState} from 'react';
import "./SpendItem.css";
import SpendDate from "./SpendDate";
import Card from "../generalUI/Card";

const SpendItem = (props) => {
  const [title,setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  }
  return (
    <Card className="spend-item">
        <SpendDate date={props.date}/>
      <div className="spend-item__description">
        <h2>{title}</h2>
        <div className="spend-item__price">{props.pret} RON</div>
      </div>
      <button onClick={clickHandler}>  Change Title</button>
    </Card>
  );
}
export default SpendItem;
