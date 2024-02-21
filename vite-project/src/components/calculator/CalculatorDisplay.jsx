
import React from 'react';

const Display = ({ displayValue, result }) => {
  return (
    <div className="display">
      <input type="text" value={displayValue} disabled />
      <span className="result">{result}</span>
    </div>
  );
};

export default Display;

