import { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => +transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense = -amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="income-expense-container">
      <div className="income-container">
        <span className="income-title">INCOME</span>
        <span className="income">₹ {income}</span>
      </div>
      <div className="expense-container">
        <span className="expense-title">EXPENSE</span>
        <span className="expense">₹ {expense}</span>
      </div>
    </div>
  );
};

export default IncomeExpense;
