import { useContext, useState } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import { v4 as uuidv4 } from "uuid";
import "./TransactionForm.css";

function TransactionForm() {
  const { addTransaction } = useContext(FinanceContext);

  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "income",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.amount) {
      alert("Please fill all fields");
      return;
    }

    addTransaction({
      id: uuidv4(),
      title: form.title,
      amount: Number(form.amount),
      type: form.type,
    });

    setForm({
      title: "",
      amount: "",
      type: "income",
    });
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Transaction Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) =>
          setForm({ ...form, amount: e.target.value })
        }
      />

      <select
        value={form.type}
        onChange={(e) =>
          setForm({ ...form, type: e.target.value })
        }
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button type="submit">
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;