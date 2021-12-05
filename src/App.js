import "./App.css";
import AddTransactions from "./components/AddTransactions";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import { GlobalProvider } from "./Context/Context";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <span className="title">Expense Tracker</span>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
