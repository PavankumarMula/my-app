import "./ExpenseItem.css";
function ExpenseItem() {
  const date = new Date().getDate();
  const ExpenseItem = "car Insurance";
  const expenseAmount = "$294.25";
  const location = "India";
  return (
    <div className="expense-item">
      <div><h2 color='white'>{date}</h2></div>
      <div className="expense-item__description">
        <h2>{ExpenseItem}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
      <div className="expense-item__location"><h2>{location}</h2></div>
    </div>
  );
}
export default ExpenseItem;
