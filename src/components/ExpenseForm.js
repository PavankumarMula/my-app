import React,{ useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ()=> {
    const [EnteredTitle,setEnteredTitle]=useState('')
    const [EnteredAmount,setEnteredAmount]=useState('')
    const [EnteredDate,setEnteredDate]=useState('')
    const titleHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountHandler =(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateHandler =(event)=>{
        setEnteredDate(event.target.value);
    }
    const formHandler= (event) =>{
        event.preventDefault();
        const Expenses={
            Title:EnteredTitle,
            Amount:EnteredAmount,
            Date:new Date(EnteredDate)
        }
        console.log(Expenses);
        
    };
  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="$1" step="$2" onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
