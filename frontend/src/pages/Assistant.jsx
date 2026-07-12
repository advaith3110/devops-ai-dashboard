import { useEffect, useRef, useState } from "react";

function Assistant() {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  // ================= AUTO SCROLL =================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // ================= SEND MESSAGE =================

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;

    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:8080/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: currentInput,
        }),
      });

      const data = await response.json();

      const botMessage = {
        sender: "bot",
        text: data.response,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.log(error);

      const errorMessage = {
        sender: "bot",
        text: "Error connecting to backend.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  // ================= ENTER KEY =================

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // ================= CLEAR CHAT =================

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="assistant-container">
      {/* ================= HEADER ================= */}

      <div className="assistant-header">
        <h2>AI Assistant</h2>

        <button className="clear-btn" onClick={clearChat}>
          Clear Chat
        </button>
      </div>

      {/* ================= CHAT AREA ================= */}

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "user" ? "user-message" : "bot-message"}
          >
            {msg.text}
          </div>
        ))}

        <div ref={messagesEndRef}></div>
      </div>

      {/* ================= INPUT AREA ================= */}

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Ask DevOps AI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}

export default Assistant;
