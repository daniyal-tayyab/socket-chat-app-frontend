import { useEffect, useState, useRef } from "react";

import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);

  useEffect(() => {
    socket.on("message response", (payload) => {
      setMessages([...messages, payload]);
    });
  }, [socket, messages]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.on("typing response", (payload) => setTypingStatus(payload));
  }, [socket]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          lastMessageRef={lastMessageRef}
          typingStatus={typingStatus}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default Chat;
