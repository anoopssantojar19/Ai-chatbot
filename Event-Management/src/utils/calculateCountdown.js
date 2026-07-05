const calculateCountdown = (targetDate) => {
  const difference = new Date(targetDate) - new Date();

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );
  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  return { days, hours, minutes };
};

export default calculateCountdown;