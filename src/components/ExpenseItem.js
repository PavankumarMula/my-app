import "./ExpenseItem.css";
import './ExpenseDate';
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.description}</h2>
        <div className="expense-item__price">{props.Amount}</div>
      </div>
      <div className="expense-item__location"><h2>{props.location}</h2></div>
    </div>
  );
}
export default ExpenseItem;
