import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">AI ChatBot</h1>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/chat">Chat</a>
        <a href="/dashboard">Dashboard</a>
      </div>
    </nav>
  );
}

export default Navbar;