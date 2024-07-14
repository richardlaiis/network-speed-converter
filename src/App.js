import './App.css';
import { useState } from 'react'
import UnitControl from './conponents/UnitControl';
import CardFooter from './conponents/cardFooter';
import UnitConverter from './conponents/UnitConverter';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far)

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
        <UnitConverter inputValue={inputValue} handleInputChange={handleInputChange}/>
      </div>
      <CardFooter inputValue={inputValue}/>
    </div>
  );
}

export default App;
