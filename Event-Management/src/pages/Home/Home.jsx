import Navbar from "../../components/layout/Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home">
        <h1>Event Management Platform</h1>
        <p>Welcome to EventX</p>
      </div>
    </>
  );
}

export default Home;