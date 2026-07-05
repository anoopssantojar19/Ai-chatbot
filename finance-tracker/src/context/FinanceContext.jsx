import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    {
      id: uuidv4(),
      title: "Salary",
      amount: 50000,
      type: "income",
    },
    {
      id: uuidv4(),
      title: "Shopping",
      amount: 4000,
      type: "expense",
    },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};