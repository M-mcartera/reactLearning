import React from 'react';
import "./SpendDate.css";
const SpendDate = (props) => {
  const month = props.date.toLocaleString("en-RO", { month: "long" });
  const day = props.date.toLocaleString("en-RO", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="spend-date">
      <div className="spend-date__day">{day}</div>
      <div className="spend-date__month">{month}</div>
      <div className="spend-date__year">{year}</div>
    </div>
  );
}

export default SpendDate;
