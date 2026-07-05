import { createContext, useState } from "react";
import eventsData from "../data/events";

export const EventContext = createContext();

function EventProvider({ children }) {
  const [events, setEvents] = useState(eventsData);

  return (
    <EventContext.Provider value={{ events, setEvents }}>
      {children}
    </EventContext.Provider>
  );
}

export default EventProvider;