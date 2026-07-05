import Navbar from "../../components/layout/Navbar/Navbar";
import "./Chat.css";

function Chat() {
  return (
    <>
      <Navbar />

      <div className="chat-page">
        <div className="chat-container">
          <div className="messages">
            <div className="bot-message">
              Hello 👋 How can I help you today?
            </div>

            <div className="user-message">
              Tell me about Artificial Intelligence
            </div>
          </div>

          <div className="chat-input">
            <input type="text" placeholder="Type your message..." />

            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;