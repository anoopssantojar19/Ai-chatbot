import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Chat from "../pages/Chat/Chat";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;