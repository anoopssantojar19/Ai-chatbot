import Navbar from "../../components/layout/Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home">
        <div className="home-content">
          <h1>Smart AI Chat Assistant</h1>

          <p>
            Experience powerful AI conversations with modern UI and instant
            responses.
          </p>

          <a href="/chat">
            <button>Start Chatting</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;