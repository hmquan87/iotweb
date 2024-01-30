
import { useState, useEffect } from 'react';

const useRandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const min = -50;
    const max = 100;
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomInteger);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      generateRandomNumber();
    }, 20000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return randomNumber;
};

export default useRandomNumber;
