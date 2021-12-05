import { useContext, useState } from "react";
import { GlobalContext } from "../Context/Context";

const AddTransactions = () => {
  const { addTransactions } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransactions({
      id: Math.floor(Math.random() * 100000000),
      text,
      amount,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="new-transac-title">Add new transaction</span>
      <input
        type="text"
        className="new-item-input"
        placeholder="Add Item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span className="amount-title">Amount</span>
      <small className="amount-desc">
        (negative = expense | positive = income)
      </small>
      <input
        type="number"
        className="amount-input"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add transaction</button>
    </form>
  );
};

export default AddTransactions;
