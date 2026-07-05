import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function ExpenseChart() {
  const data = [
    { name: "Food", value: 4000 },
    { name: "Travel", value: 3000 },
    { name: "Shopping", value: 5000 },
  ];

  const COLORS = [
    "#2563eb",
    "#22c55e",
    "#ef4444",
  ];

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "16px",
        marginTop: "30px",
        color: "white",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Expense Overview
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpenseChart;