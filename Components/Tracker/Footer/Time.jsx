import { useEffect, useState } from 'react';

export const Time = () => {
  const [time, setTime] = useState(null);
  useEffect(() => {
    setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour12: false, hour: 'numeric', minute: 'numeric' }));
  }, []);
  return <>{time}</>;
};
