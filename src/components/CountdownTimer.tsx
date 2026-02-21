'use client';

import { useState, useEffect, useCallback } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  const calculateTimeLeft = useCallback((): TimeLeft | null => {
    const eventDate = new Date(targetDate).getTime();
    const now = Date.now();
    const distance = eventDate - now;

    if (distance <= 0) {
      setIsExpired(true);
      return null;
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }, [targetDate]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  if (isExpired) {
    return (
      <div className="countdown">
        <div className="countdown-message" style={{ marginTop: 0 }}>Event in progress!</div>
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <div className="countdown" aria-live="polite" aria-atomic="true">
        Loading…
      </div>
    );
  }

  const units = [
    { label: 'days', value: timeLeft.days },
    { label: 'hours', value: timeLeft.hours },
    { label: 'minutes', value: timeLeft.minutes },
    { label: 'seconds', value: timeLeft.seconds },
  ];

  return (
    <>
      <div className="countdown" aria-live="polite" aria-atomic="true">
        {units.map(({ label, value }) => (
          <div key={label} className="countdown-unit">
            <div className="countdown-flip" data-unit={label}>
              <div className="countdown-flip-top">
                <span>{String(value).padStart(2, '0')}</span>
              </div>
              <div className="countdown-flip-bottom">
                <span>{String(value).padStart(2, '0')}</span>
              </div>
            </div>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
      <div className="countdown-message">until tee-off</div>
    </>
  );
}
