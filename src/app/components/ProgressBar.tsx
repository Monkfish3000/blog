'use client';

import { useState, useEffect, useRef } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [readingArticle, setReadingArticle] = useState(false);

  const progressBarRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollTop = window.scrollY;
      const fullScrollHeight = documentHeight - windowHeight;

      const progress = (scrollTop / fullScrollHeight) * 100;
      setScrollProgress(Math.floor(progress));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollProgress);
    if (scrollProgress > 29) setReadingArticle(true);
    if (scrollProgress < 29) setReadingArticle(false);
  }, [scrollProgress]);

  if (!readingArticle) return <></>;

  return (
    <span
      ref={progressBarRef}
      style={{ transform: `translateX(${50 - 100}%)` }}
      className="bg-customBlue h-1 w-full fixed top-0"
    />
  );
};

export default ProgressBar;
