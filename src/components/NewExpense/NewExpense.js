import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    setFormState(false);
    props.onAddNewExpense(expenseData);
  };

  const [formState, setFormState] = useState(false);

  const setFormFalse = () => {
    return setFormState(false);
  };

  return (
    <div className="new-expense">
      {!formState ? (
        <button onClick={()=>{setFormState(true);}}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpenseData={setFormFalse}
        />
      )}
    </div>
  );
};

export default NewExpense;
