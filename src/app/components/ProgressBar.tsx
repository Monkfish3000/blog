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

        const articleContainer = document.getElementById('article-content');
        
        let startPoint = 0;
        if (articleContainer) {
            startPoint = articleContainer.offsetTop;
        }

        // If the article hasn't started yet (e.g. still in hero), progress is 0
        if (scrollTop < startPoint) {
            setScrollProgress(0);
            return;
        }

        // Calculate available scroll distance from the start of the article
        const totalScrollDistance = documentHeight - windowHeight - startPoint;

        // If there is no distance to scroll (content fits in screen), progress is 100
        if (totalScrollDistance <= 0) {
             setScrollProgress(100);
             return;
        }

        const currentScrollWithinArticle = scrollTop - startPoint;
        const progress = (currentScrollWithinArticle / totalScrollDistance) * 100;
        
        setScrollProgress(Math.floor(Math.max(0, Math.min(100, progress))));
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
