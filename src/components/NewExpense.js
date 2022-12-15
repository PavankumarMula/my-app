import React,{ useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEdit,setisEdit]=useState(false)
    const receiveDataFromChild=(datafromchild)=>{
        const expenseData={
            ...datafromchild,
            id:Math.random().toString()
        }
        props.dataForm(expenseData);
        setisEdit(false);
    }
   const EditingHandler=()=>{
    setisEdit(true);
   }
   const stopEditing=()=>{
      setisEdit(false);
   }
  return (
    <div className="new-expense">
      {!isEdit && <button onClick={EditingHandler}>Add New Expense</button>}
      {isEdit && <ExpenseForm onSaveForm={receiveDataFromChild} 
      onCancel={stopEditing} />}
    </div>
  );
};
export default NewExpense;
