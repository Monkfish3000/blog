'use client';

import { useState, useEffect, useRef } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const progressBarRef = useRef(null);
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.clientHeight;
        const scrollTop = window.scrollY;
        const fullScrollHeight = documentHeight - windowHeight;

        const progress = (scrollTop / fullScrollHeight) * 100;
        setScrollProgress(Math.floor(progress));
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full">
      <div
        ref={progressBarRef}
        className="bg-customBlue h-1"
        style={{ transform: `translateX(${-100 + scrollProgress}%)` }}
      />
    </div>
  );
};

export default ProgressBar;
