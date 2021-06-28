import React, { useState } from "react";
import SpendItem from "./SpendItem";
import Card from "../generalUI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Cheltuieli.css";
const Cheltuieli = (props) => {
  const [filteredYear, setfilteredYear] = useState('2021');
  const saveFilterHandler = filter => {
    setfilteredYear(filter);
  }
  return (
    <Card className="cheltuieli">
      <ExpensesFilter onSaveFilter={saveFilterHandler} selectedYear={filteredYear} />
      {props.items.map(item => <SpendItem title={item.title} pret={item.amount} date={item.date} />)}
    </Card>
  );
};

export default Cheltuieli;
