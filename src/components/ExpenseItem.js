import "./ExpenseItem.css";
import './ExpenseDate';
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem=(props)=> {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails Amount={props.Amount}
      description={props.description}
      ></ExpenseDetails>
      <div className="expense-item__location"><h2>{props.location}</h2></div>
    </div>
  );
}
export default ExpenseItem;
