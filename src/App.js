import './App.css';
import { useState } from 'react'
import UnitControl from './conponents/UnitControl';
import CardFooter from './conponents/cardFooter';
function App() {
  const [inputValue, setInputValue] = useState(0);
  const handleInputChange = (e) => {
    const { value } = e.target; // here e means event (The frame of input)
    setInputValue(value);
  };
  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input type="number" value={inputValue} className="input-number" onChange={handleInputChange} min="0" />
          </div>
          <span className="angle-icon fa-2x" style={{ marginTop: 30 }}>
            <i className="fas fa-angle-right"></i>
          </span>
          <div className="text-right flex-1">
            <div className="converter-title">Show</div>
            <input
              type="text"
              className="input-number text-right"
              disabled
              value={inputValue/8}
            />
          </div>
        </div>
      </div>
      <CardFooter />
    </div>
  );
}

export default App;
