import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h2>Total Chats</h2>
        <h1>245</h1>
      </div>

      <div className="dashboard-card">
        <h2>Active Users</h2>
        <h1>1,204</h1>
      </div>

      <div className="dashboard-card">
        <h2>AI Responses</h2>
        <h1>12K</h1>
      </div>
    </div>
  );
}

export default Dashboard;