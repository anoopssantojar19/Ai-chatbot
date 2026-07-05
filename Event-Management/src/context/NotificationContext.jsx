import { createContext, useState } from "react";

export const NotificationContext = createContext();

function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    setNotifications((prev) => [...prev, message]);
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;