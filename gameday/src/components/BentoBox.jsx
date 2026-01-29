import React from 'react'

const BentoBox = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-white/10 ${className}`}
    >
      {children}
    </div>
  );
};

export default BentoBox