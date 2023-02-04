import io from "socket.io-client";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Chat from "./components/Chat";

const socket = io("http://localhost:5000");

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
        <Route path="/chat" element={<Chat socket={socket} />} />
      </Routes>
    </div>
  );
}

export default App;
