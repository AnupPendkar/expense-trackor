import { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => +transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="balance-container">
      <span className="balance-title">YOUR BALANCE</span>
      <div className="balance">
        <span className="balance-no">₹ {total}</span>
      </div>
    </div>
  );
};

export default Balance;
