import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UnitConverter = ( {inputValue, handleInputChange} ) => 
    (
        <div className="converter">
          <div className="flex-1">
            <div className="converter-title">Set</div>
            <input type="number" value={inputValue} className="input-number" onChange={handleInputChange} min="0" />
          </div>
          <span className="angle-icon fa-2x" style={{ marginTop: 30 }}>
            <FontAwesomeIcon icon={['fas', 'angle-right']}/>
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
    );

export default UnitConverter;