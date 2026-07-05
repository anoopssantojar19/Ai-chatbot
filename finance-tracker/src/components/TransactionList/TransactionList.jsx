import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import "./TransactionList.css";

function TransactionList() {
  const { transactions, deleteTransaction } =
    useContext(FinanceContext);

  return (
    <div className="transaction-list">
      <h2>Recent Transactions</h2>

      {transactions.length === 0 ? (
        <p className="empty-message">
          No transactions added yet.
        </p>
      ) : (
        transactions.map((item) => (
          <div
            className="transaction-card"
            key={item.id}
          >
            <div>
              <h3>{item.title}</h3>
              <p>{item.type}</p>
            </div>

            <div className="transaction-right">
              <span
                className={
                  item.type === "income"
                    ? "income"
                    : "expense"
                }
              >
                ₹ {item.amount}
              </span>

              <button
                onClick={() =>
                  deleteTransaction(item.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;