// components/CountdownTimer.js

import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const storedTargetDate = localStorage.getItem('targetDate');
    let countdownInterval:any = 0;

    if (storedTargetDate) {
      const targetDate = new Date(storedTargetDate);

      // Start the countdown timer
      startCountdown(targetDate);

      // Clear the countdown interval when the component unmounts
      return () => clearInterval(countdownInterval);
    } else {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 3);

      // Store the target date in local storage
      localStorage.setItem('targetDate', targetDate as any);

      // Start the countdown timer
      startCountdown(targetDate);

      // Clear the countdown interval when the component unmounts
      return () => clearInterval(countdownInterval);
    }
  }, []); // Run only once on component mount

  const startCountdown = (targetDate:any) => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // If the target date has passed, reset the countdown
        setTimeLeft('00:00:00:00');
        localStorage.removeItem('targetDate');
        clearInterval(countdownInterval);
      } else {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format the countdown timer
        const formattedTimer = `${hours}:${minutes}:${seconds}`;

        // Update the countdown timer state
        setTimeLeft(formattedTimer);
      }
    };

    // Initial call to update countdown
    updateCountdown();

    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
  };

  return <div>{timeLeft}</div>;
};

export default CountdownTimer;
