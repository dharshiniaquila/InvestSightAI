import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Result from "./pages/Result";
import Memory from "./pages/Memory";
import Chat from "./pages/Chat";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/result" element={<Result />} />
      <Route path="/memory" element={<Memory />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}