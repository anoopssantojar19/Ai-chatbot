import { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Salary", amount: 40000 },
    { id: 2, text: "Food", amount: -2000 },
    { id: 3, text: "Shopping", amount: -5000 },
  ]);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };

    setTransactions([...transactions, newTransaction]);

    setText("");
    setAmount("");
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const amounts = transactions.map((t) => t.amount);

  const balance = amounts.reduce((acc, item) => acc + item, 0);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);

  return (
    <div className="app">
      <div className="container">
        <h1>💰 Finance Tracker</h1>

        <div className="balance-card">
          <h2>Total Balance</h2>
          <p>₹{balance}</p>
        </div>

        <div className="summary">
          <div className="income">
            <h3>Income</h3>
            <p>₹{income}</p>
          </div>

          <div className="expense">
            <h3>Expense</h3>
            <p>₹{Math.abs(expense)}</p>
          </div>
        </div>

        <form onSubmit={addTransaction} className="form">
          <input
            type="text"
            placeholder="Enter title"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter amount (+income, -expense)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button type="submit">Add Transaction</button>
        </form>

        <div className="transaction-section">
          <h2>Transactions</h2>

          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`transaction ${
                transaction.amount > 0 ? "income-t" : "expense-t"
              }`}
            >
              <span>{transaction.text}</span>

              <div>
                <span>
                  {transaction.amount > 0 ? "+" : "-"} ₹
                  {Math.abs(transaction.amount)}
                </span>

                <button
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  ✖
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;