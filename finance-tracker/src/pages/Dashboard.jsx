import { useContext } from "react";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import TransactionList from "../components/TransactionList/TransactionList";
import ExpenseChart from "../components/ExpenseChart/ExpenseChart";
import { FinanceContext } from "../context/FinanceContext";

function Dashboard() {
  const { transactions } =
    useContext(FinanceContext);

  const income = transactions
    .filter((item) => item.type === "income")
    .reduce(
      (acc, item) => acc + item.amount,
      0
    );

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce(
      (acc, item) => acc + item.amount,
      0
    );

  const balance = income - expense;

  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card income-card">
          <h3>Total Income</h3>
          <h1>₹ {income}</h1>
        </div>

        <div className="card expense-card">
          <h3>Total Expense</h3>
          <h1>₹ {expense}</h1>
        </div>

        <div className="card balance-card">
          <h3>Balance</h3>
          <h1>₹ {balance}</h1>
        </div>
      </div>

      <TransactionForm />

      <ExpenseChart />

      <TransactionList />
    </div>
  );
}

export default Dashboard;