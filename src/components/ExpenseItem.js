import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Dec 12</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.15
        </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
