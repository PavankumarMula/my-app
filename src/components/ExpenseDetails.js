function ExpenseDetails(props) {
  const title = props.description;
  const Amount = props.Amount;
  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">{Amount}</div>
    </div>
  );
}
export default ExpenseDetails;
