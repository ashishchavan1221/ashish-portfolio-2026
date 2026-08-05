import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, delay = 100 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting speed is slightly faster
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }, delay / 2);
    } else {
      // Typing speed
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }, delay);
    }

    // Pause at the end of typing
    if (!isDeleting && currentText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000); // 2 second pause
    } 
    // Move to next word after deleting
    else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay]);

  return (
    <span className="inline-flex items-center">
      {currentText}
      <span className="font-light animate-pulse ml-1 text-cyan-400">|</span>
    </span>
  );
};

export default Typewriter;
