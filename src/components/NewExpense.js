import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const receiveDataFromChild=(datafromchild)=>{
        const expenseData={
            ...datafromchild,
            id:Math.random().toString()
        }
        props.dataForm(expenseData);
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveForm={receiveDataFromChild} />
    </div>
  );
};
export default NewExpense;
