import { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../Context/Context";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <span className="history-title">History</span>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </>
  );
};

export default TransactionList;
