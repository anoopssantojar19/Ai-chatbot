import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

/* Pages */

import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Profile from "../pages/Profile";
import Messages from "../pages/Messages";
import Clubs from "../pages/Clubs";
import Events from "../pages/Events";
import Notes from "../pages/Notes";
import Reels from "../pages/Reels";
import Notifications from "../pages/Notifications";
import Settings from "../pages/Settings";
import Confessions from "../pages/Confessions";

/* Auth Pages */

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Layout Routes */}

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="profile" element={<Profile />} />
        <Route path="messages" element={<Messages />} />
        <Route path="clubs" element={<Clubs />} />
        <Route path="events" element={<Events />} />
        <Route path="notes" element={<Notes />} />
        <Route path="reels" element={<Reels />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
        <Route path="confessions" element={<Confessions />} />
      </Route>

      {/* Auth Layout Routes */}

      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;