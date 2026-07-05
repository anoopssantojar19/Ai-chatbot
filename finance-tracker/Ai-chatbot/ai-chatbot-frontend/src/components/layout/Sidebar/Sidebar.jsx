import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Recent Chats</h2>

      <div className="chat-history">
        <p>What is React?</p>
        <p>Explain AI</p>
        <p>Frontend Roadmap</p>
        <p>Machine Learning Basics</p>
      </div>
    </div>
  );
}

export default Sidebar;