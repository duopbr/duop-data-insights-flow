
import { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startCount = 0;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const currentCount = Math.floor(startCount + (end - startCount) * easeOut);
      
      setCount(currentCount);
      
      if (percentage < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [end, duration]);

  return <span>{prefix}{count}{suffix}</span>;
};
