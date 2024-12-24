// Card.js
import React from 'react';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const Card = ({ title, children }) => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, scrollTrigger: cardRef.current }
    );
  }, []);

  return (
    <div ref={cardRef} className="card my-4 shadow">
      <div className="card-header bg-primary text-white">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
