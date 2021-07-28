import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummyExpenses = [
  {
    id: "1041",
    title: "one",
    amount: "100",
    date: new Date(2020, 12, 12),
  },
];
const App = () => {
  const [expenseData, setExpenseData] = useState(dummyExpenses);

  const addExpenseData = (expense) => {
    setExpenseData((state) => {
      return [expense, ...state];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseData} />
      <Expenses items={expenseData} />
    </div>
  );
};

export default App;
