import React from 'react';
import './BlackDiv.css';

const BlackDiv = ({ className, children }) => {
  return (
    <div className={`black-div ${className}`}>
      {children}
    </div>
  );
};

export default BlackDiv;
