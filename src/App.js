import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [binaryText, setBinaryText] = useState("");
  const [decimalNumber, setDecimalNumber] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");


  const binaryToDecimal = (binary) => {
    let decimal = 0;
    for(let i = binary.length-1; i>=0; i--){
      decimal += parseInt(binary[i])*Math.pow(2,binary.length-1-i);
    }
    return decimal;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // setDecimalNumber(parseInt(binaryText, 2));
    
    if((/^[01]*$/).test(binaryText)) {
      const decimal = binaryToDecimal(binaryText);
      setDecimalNumber(decimal);
      setErrorMessage("");
    } else {
      setDecimalNumber(0);
      setErrorMessage("Non-binary entry!");
    }
  }

  return (
    <div className="App">
      {errorMessage}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={binaryText}
          onChange={(event) => setBinaryText(event.target.value)}
        />
        <button type="submit">
          Convert!
        </button>
      </form>
      <br/>
      {decimalNumber}
    </div>
  );
}

export default App;
