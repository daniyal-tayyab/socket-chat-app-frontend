import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    const payload = {
      username,
      socketId: socket.id,
    };
    socket.emit("new user", payload);
    navigate("/chat");
  };

  const handleChange = (e) => setUsername(e.target.value);

  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={username}
        onChange={handleChange}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};

export default Home;
