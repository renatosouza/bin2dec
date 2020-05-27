import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      binaryText: "111",
      decimalNumber: 0,
    }
  }
  
  binaryToDecimal(binary) {
    // return parseInt(binary, 2);
    let decimal = 0;
    for(let i = binary.length-1; i>=0; i--){
      decimal += parseInt(binary[i])*Math.pow(2,binary.length-1-i);
    }
    this.setState({decimalNumber: decimal})
  }

  render() {
    const {binaryText, decimalNumber} = this.state;

    return (
      <div className="App">
        {binaryText}
        <br />
        <button onClick={() => this.binaryToDecimal(binaryText)}>
          Convert!
        </button>
        <br/>
        {decimalNumber}
      </div>
    );
  }
}

export default App;
