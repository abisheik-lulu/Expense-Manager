import "./ExpenseForm.css";
import { useState } from "react";


const ExpenseForm = (props) => {
  const [userInupt, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
      setUserInput((state)=>{
          return {...state, title:event.target.value };
      });
  };

  const amountChangeHandler = (event) => {
    setUserInput((state) => {
      return { ...state, amount: +event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((state) => {
      return { ...state, date : event.target.value };
    });
  };

  const submitHandler=(e)=>{
    e.preventDefault();

    const expenseData = { ...userInupt,amount: +userInupt.amount, date: new Date(userInupt.date) };
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });

    props.onSaveExpenseData(expenseData);

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInupt.title}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            onChange={amountChangeHandler}
            value={userInupt.amount}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInupt.date}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancelExpenseData}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
