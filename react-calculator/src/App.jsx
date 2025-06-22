import React, { useState, useEffect } from 'react';
import { Calculator, Settings, RotateCcw, History, Zap, Ruler, Thermometer, Scale } from 'lucide-react';
import * as math from 'mathjs';
import './App.css';

const EngineeringCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [mode, setMode] = useState('standard'); // standard, scientific, programmer, unit
  const [angleUnit, setAngleUnit] = useState('deg'); // deg, rad
  const [history, setHistory] = useState([]);
  const [memory, setMemory] = useState(0);
  const [showHistory, setShowHistory] = useState(false);

  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearDisplay = () => {
    setDisplay('0');
    setWaitingForOperand(false);
  };

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);
      
      setDisplay(String(newValue));
      setPreviousValue(newValue);
      addToHistory(`${currentValue} ${operation} ${inputValue} = ${newValue}`);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+': return firstValue + secondValue;
      case '-': return firstValue - secondValue;
      case '×': return firstValue * secondValue;
      case '÷': return firstValue / secondValue;
      case '^': return Math.pow(firstValue, secondValue);
      case 'mod': return firstValue % secondValue;
      default: return secondValue;
    }
  };

  const addToHistory = (entry) => {
    setHistory(prev => [entry, ...prev.slice(0, 9)]);
  };

  const scientificFunction = (func, value) => {
    const numValue = parseFloat(value);
    let result;

    switch (func) {
      case 'sin':
        result = angleUnit === 'deg' ? Math.sin(numValue * Math.PI / 180) : Math.sin(numValue);
        break;
      case 'cos':
        result = angleUnit === 'deg' ? Math.cos(numValue * Math.PI / 180) : Math.cos(numValue);
        break;
      case 'tan':
        result = angleUnit === 'deg' ? Math.tan(numValue * Math.PI / 180) : Math.tan(numValue);
        break;
      case 'log':
        result = Math.log10(numValue);
        break;
      case 'ln':
        result = Math.log(numValue);
        break;
      case 'sqrt':
        result = Math.sqrt(numValue);
        break;
      case 'square':
        result = numValue * numValue;
        break;
      case 'cube':
        result = numValue * numValue * numValue;
        break;
      case 'factorial':
        result = math.factorial(numValue);
        break;
      case 'inverse':
        result = 1 / numValue;
        break;
      case 'abs':
        result = Math.abs(numValue);
        break;
      case 'exp':
        result = Math.exp(numValue);
        break;
      default:
        result = numValue;
    }

    setDisplay(String(result));
    addToHistory(`${func}(${value}) = ${result}`);
  };

  const memoryOperation = (op) => {
    const currentValue = parseFloat(display);
    
    switch (op) {
      case 'MC':
        setMemory(0);
        break;
      case 'MR':
        setDisplay(String(memory));
        break;
      case 'M+':
        setMemory(memory + currentValue);
        break;
      case 'M-':
        setMemory(memory - currentValue);
        break;
      default:
        break;
    }
  };

  const unitConversion = (fromUnit, toUnit, value) => {
    const numValue = parseFloat(value);
    let result;

    // Length conversions
    if (fromUnit === 'm' && toUnit === 'ft') result = numValue * 3.28084;
    else if (fromUnit === 'ft' && toUnit === 'm') result = numValue / 3.28084;
    else if (fromUnit === 'km' && toUnit === 'mi') result = numValue * 0.621371;
    else if (fromUnit === 'mi' && toUnit === 'km') result = numValue / 0.621371;
    
    // Temperature conversions
    else if (fromUnit === 'C' && toUnit === 'F') result = (numValue * 9/5) + 32;
    else if (fromUnit === 'F' && toUnit === 'C') result = (numValue - 32) * 5/9;
    else if (fromUnit === 'C' && toUnit === 'K') result = numValue + 273.15;
    else if (fromUnit === 'K' && toUnit === 'C') result = numValue - 273.15;
    
    // Weight conversions
    else if (fromUnit === 'kg' && toUnit === 'lb') result = numValue * 2.20462;
    else if (fromUnit === 'lb' && toUnit === 'kg') result = numValue / 2.20462;
    
    else result = numValue;

    setDisplay(String(result.toFixed(6)));
    addToHistory(`${value} ${fromUnit} = ${result.toFixed(6)} ${toUnit}`);
  };

  const handleKeyPress = (e) => {
    if (e.key >= '0' && e.key <= '9') inputDigit(e.key);
    else if (e.key === '.') inputDecimal();
    else if (e.key === '+') performOperation('+');
    else if (e.key === '-') performOperation('-');
    else if (e.key === '*') performOperation('×');
    else if (e.key === '/') performOperation('÷');
    else if (e.key === 'Enter' || e.key === '=') performOperation('=');
    else if (e.key === 'Escape') clearAll();
    else if (e.key === 'Backspace') {
      if (display.length > 1) {
        setDisplay(display.slice(0, -1));
      } else {
        setDisplay('0');
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [display, waitingForOperand]);

  const renderStandardMode = () => (
    <div className="calculator-grid">
      <div className="display">
        <div className="display-value">{display}</div>
        <div className="display-memory">M: {memory}</div>
      </div>
      
      <div className="button-row">
        <button className="btn function" onClick={() => memoryOperation('MC')}>MC</button>
        <button className="btn function" onClick={() => memoryOperation('MR')}>MR</button>
        <button className="btn function" onClick={() => memoryOperation('M+')}>M+</button>
        <button className="btn function" onClick={() => memoryOperation('M-')}>M-</button>
      </div>

      <div className="button-row">
        <button className="btn function" onClick={clearAll}>C</button>
        <button className="btn function" onClick={clearDisplay}>CE</button>
        <button className="btn function" onClick={() => scientificFunction('abs', display)}>|x|</button>
        <button className="btn operator" onClick={() => performOperation('÷')}>÷</button>
      </div>

      <div className="button-row">
        <button className="btn number" onClick={() => inputDigit(7)}>7</button>
        <button className="btn number" onClick={() => inputDigit(8)}>8</button>
        <button className="btn number" onClick={() => inputDigit(9)}>9</button>
        <button className="btn operator" onClick={() => performOperation('×')}>×</button>
      </div>

      <div className="button-row">
        <button className="btn number" onClick={() => inputDigit(4)}>4</button>
        <button className="btn number" onClick={() => inputDigit(5)}>5</button>
        <button className="btn number" onClick={() => inputDigit(6)}>6</button>
        <button className="btn operator" onClick={() => performOperation('-')}>-</button>
      </div>

      <div className="button-row">
        <button className="btn number" onClick={() => inputDigit(1)}>1</button>
        <button className="btn number" onClick={() => inputDigit(2)}>2</button>
        <button className="btn number" onClick={() => inputDigit(3)}>3</button>
        <button className="btn operator" onClick={() => performOperation('+')}>+</button>
      </div>

      <div className="button-row">
        <button className="btn number wide" onClick={() => inputDigit(0)}>0</button>
        <button className="btn number" onClick={inputDecimal}>.</button>
        <button className="btn equals" onClick={() => performOperation('=')}>=</button>
      </div>
    </div>
  );

  const renderScientificMode = () => (
    <div className="calculator-grid scientific">
      <div className="display">
        <div className="display-value">{display}</div>
        <div className="display-info">{angleUnit.toUpperCase()}</div>
      </div>

      <div className="button-row">
        <button className="btn function" onClick={() => scientificFunction('sin', display)}>sin</button>
        <button className="btn function" onClick={() => scientificFunction('cos', display)}>cos</button>
        <button className="btn function" onClick={() => scientificFunction('tan', display)}>tan</button>
        <button className="btn function" onClick={() => scientificFunction('log', display)}>log</button>
      </div>

      <div className="button-row">
        <button className="btn function" onClick={() => scientificFunction('sqrt', display)}>√</button>
        <button className="btn function" onClick={() => scientificFunction('square', display)}>x²</button>
        <button className="btn function" onClick={() => scientificFunction('cube', display)}>x³</button>
        <button className="btn function" onClick={() => scientificFunction('factorial', display)}>x!</button>
      </div>

      <div className="button-row">
        <button className="btn function" onClick={() => scientificFunction('ln', display)}>ln</button>
        <button className="btn function" onClick={() => scientificFunction('exp', display)}>eˣ</button>
        <button className="btn function" onClick={() => scientificFunction('inverse', display)}>1/x</button>
        <button className="btn function" onClick={() => performOperation('^')}>xʸ</button>
      </div>

      <div className="button-row">
        <button className="btn function" onClick={() => setAngleUnit(angleUnit === 'deg' ? 'rad' : 'deg')}>
          {angleUnit.toUpperCase()}
        </button>
        <button className="btn function" onClick={() => inputDigit(Math.PI)}>π</button>
        <button className="btn function" onClick={() => inputDigit(Math.E)}>e</button>
        <button className="btn function" onClick={() => performOperation('mod')}>mod</button>
      </div>

      {renderStandardMode()}
    </div>
  );

  const renderUnitConverter = () => (
    <div className="unit-converter">
      <div className="converter-section">
        <h3>Length</h3>
        <div className="converter-row">
          <input type="number" value={display} onChange={(e) => setDisplay(e.target.value)} />
          <select onChange={(e) => unitConversion('m', e.target.value, display)}>
            <option value="m">Meters</option>
            <option value="ft">Feet</option>
            <option value="km">Kilometers</option>
            <option value="mi">Miles</option>
          </select>
        </div>
      </div>

      <div className="converter-section">
        <h3>Temperature</h3>
        <div className="converter-row">
          <input type="number" value={display} onChange={(e) => setDisplay(e.target.value)} />
          <select onChange={(e) => unitConversion('C', e.target.value, display)}>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
            <option value="K">Kelvin</option>
          </select>
        </div>
      </div>

      <div className="converter-section">
        <h3>Weight</h3>
        <div className="converter-row">
          <input type="number" value={display} onChange={(e) => setDisplay(e.target.value)} />
          <select onChange={(e) => unitConversion('kg', e.target.value, display)}>
            <option value="kg">Kilograms</option>
            <option value="lb">Pounds</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <h1><Calculator /> Engineering Calculator</h1>
        <div className="mode-selector">
          <button 
            className={`mode-btn ${mode === 'standard' ? 'active' : ''}`}
            onClick={() => setMode('standard')}
          >
            <Calculator size={16} />
            Standard
          </button>
          <button 
            className={`mode-btn ${mode === 'scientific' ? 'active' : ''}`}
            onClick={() => setMode('scientific')}
          >
            <Zap size={16} />
            Scientific
          </button>
          <button 
            className={`mode-btn ${mode === 'unit' ? 'active' : ''}`}
            onClick={() => setMode('unit')}
          >
            <Ruler size={16} />
            Units
          </button>
        </div>
        <div className="header-controls">
          <button className="icon-btn" onClick={() => setShowHistory(!showHistory)}>
            <History size={20} />
          </button>
          <button className="icon-btn" onClick={clearAll}>
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      <div className="calculator-body">
        {showHistory && (
          <div className="history-panel">
            <h3>History</h3>
            {history.map((entry, index) => (
              <div key={index} className="history-entry">{entry}</div>
            ))}
            {history.length === 0 && <div className="no-history">No calculations yet</div>}
          </div>
        )}

        <div className="calculator-main">
          {mode === 'standard' && renderStandardMode()}
          {mode === 'scientific' && renderScientificMode()}
          {mode === 'unit' && renderUnitConverter()}
        </div>
      </div>
    </div>
  );
};

export default EngineeringCalculator;
