import React, { useEffect, useState } from "react";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("new user response", (users) => {
      setUsers(users);
    });
  }, [socket, users]);
  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users.map((user) => (
            <p key={user.socketId}>{user.username}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
