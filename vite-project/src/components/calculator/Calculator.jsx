
import React, { useState } from 'react';
import Display from './CalculatorDisplay';
import Buttons from './CalculatorButt';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <Display displayValue={display} result={result} />
      <Buttons handleClick={handleClick} />
    </div>
  );
};

export default Calculator;

