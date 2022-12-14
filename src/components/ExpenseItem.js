import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [amount, setMoney] = useState(props.amount);
  const changeCurrency = () => {
    setMoney("$100");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={changeCurrency}>Click Me</button>
    </Card>
  );
};

export default ExpenseItem;
