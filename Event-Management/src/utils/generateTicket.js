const generateTicket = (eventName, userName) => {
  return {
    ticketId: Math.floor(Math.random() * 100000),
    eventName,
    userName,
    issuedAt: new Date(),
  };
};

export default generateTicket;