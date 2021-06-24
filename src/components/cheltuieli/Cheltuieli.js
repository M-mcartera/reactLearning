import React, {useState} from "react";
import SpendItem from "./SpendItem";
import Card from "../generalUI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Cheltuieli.css";
const Cheltuieli = (props) => {
  const [filteredYear, setfilteredYear] = useState('2021');
  const saveFilterHandler = filter =>{
    setfilteredYear(filter);
  }
  return (
    <Card className="cheltuieli">
      <ExpensesFilter onSaveFilter={saveFilterHandler} selectedYear={filteredYear}/>
      <SpendItem
        title={props.items[0].title}
        pret={props.items[0].amount}
        date={props.items[0].date}
      />
      <SpendItem
        title={props.items[1].title}
        pret={props.items[1].amount}
        date={props.items[1].date}
      />
      <SpendItem
        title={props.items[2].title}
        pret={props.items[2].amount}
        date={props.items[2].date}
      />
      <SpendItem
        title={props.items[3].title}
        pret={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Cheltuieli;
