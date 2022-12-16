import React,{ useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (prop)=> {
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
            title:EnteredTitle,
            amount:parseInt(EnteredAmount),
            date:new Date(EnteredDate)
        }
        prop.onSaveForm(Expenses);
        setEnteredTitle('')
        setEnteredAmount('');
        setEnteredDate('');
    };
  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={EnteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={EnteredAmount} min="$1" step="$2" onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={EnteredDate} min="2019-01-01" max="2022-12-31" onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={prop.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
