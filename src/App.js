import React from 'react';
import './App.css';

const App = () => {
  const text = "110";
  const binaryToDecimal = binary => {
    // return parseInt(binary, 2);
    let decimal = 0;
    for(let i = binary.length-1; i>=0; i--){
      decimal += parseInt(binary[i])*Math.pow(2,binary.length-1-i);
    }
    return decimal;
  }

  return (
    <div className="App">
      {text}
      <br/>
      {binaryToDecimal(text)}
    </div>
  );
}

export default App;
