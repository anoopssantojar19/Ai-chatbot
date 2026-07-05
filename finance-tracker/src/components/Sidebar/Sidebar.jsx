import { Link } from "react-router-dom";
import { FaChartPie, FaCog, FaHome } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>FT</h1>

      <nav>
        <Link to="/">
          <FaHome /> Dashboard
        </Link>

        <Link to="/reports">
          <FaChartPie /> Reports
        </Link>

        <Link to="/settings">
          <FaCog /> Settings
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;