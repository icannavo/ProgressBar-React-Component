import React, { useState, useEffect } from 'react';
import './ComponenteCSS/ProgressBar.css';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
    </div>
  );
};

export default ProgressBar;
