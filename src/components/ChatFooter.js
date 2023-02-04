import React, { useState } from "react";

import checkPageStatus from "../utils/checkPageStatus";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleTyping = () => {
    socket.emit("typing", `${localStorage.getItem("username")} is typing...`);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const payload = {
      text: message,
      username: localStorage.getItem("username"),
      id: `${socket.id}${Math.random()}`,
      socketId: socket.id,
    };
    if (message.trim() && localStorage.getItem("username")) {
      socket.emit("message", payload);
      checkPageStatus(message, localStorage.getItem("username"));
    }
    setMessage("");
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
