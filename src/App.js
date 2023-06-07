import React, { useState } from 'react';
import './App.css';

const CalculatorApp = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    setDisplay(prevDisplay => prevDisplay + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div className="App">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button className="clear-button" onClick={clearDisplay}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
