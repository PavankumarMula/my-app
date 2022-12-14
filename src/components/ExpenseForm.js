import "./ExpenseForm.css";
const ExpenseForm = () => {
    const showConsole =(event)=>{
        event.preventDefault();
        const inputs=document.getElementsByTagName('input');
        for (let x of inputs){
            console.log(x.value);
        }
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="$1" step="$2"  />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31"  />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={showConsole}>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
