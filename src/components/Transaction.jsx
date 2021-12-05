import { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const Transaction = ({ transaction }) => {
  const { deleteTransactions } = useContext(GlobalContext);
  const handleDelete = (id) => {
    deleteTransactions(id);
  };

  return (
    <div className="history">
      <span className="history-item-title">{transaction.text}</span>
      <div className="history-item-price-container">
        <span className="history-item-price">{transaction.amount}</span>
        <span
          className={"indicator " + (transaction.amount < 0 ? "minus" : "plus")}
        ></span>
        <i
          className="close far fa-times-circle"
          onClick={() => handleDelete(transaction.id)}
        ></i>
      </div>
    </div>
  );
};

export default Transaction;
