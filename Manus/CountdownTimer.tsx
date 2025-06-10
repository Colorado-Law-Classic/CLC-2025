import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-8">Tournament Countdown</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md w-24">
          <div className="text-4xl font-bold">{timeLeft.days}</div>
          <div className="text-sm uppercase mt-2">Days</div>
        </div>
        <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md w-24">
          <div className="text-4xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm uppercase mt-2">Hours</div>
        </div>
        <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md w-24">
          <div className="text-4xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm uppercase mt-2">Minutes</div>
        </div>
        <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md w-24">
          <div className="text-4xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm uppercase mt-2">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
