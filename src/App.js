import React, { Component } from 'react';
import './App.css';

// O ERRO TEM A VER COM O LANCE DO BIND
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      binaryText: "",
      decimalNumber: 0,
      errorMessage: "",
    };
  }

  binaryToDecimal = (binary) => {
    // const decimal = parseInt(binary, 2);
    let decimal = 0;
    for(let i = binary.length-1; i>=0; i--){
      decimal += parseInt(binary[i])*Math.pow(2,binary.length-1-i);
    }
    return decimal;
  }
  
  onFormSubmit = (event) => {
    event.preventDefault();
    const {binaryText} = this.state; 
    // this.setState({decimalNumber: parseInt(binaryText, 2)});
    
    if((/^[01]*$/).test(binaryText)) {
      const decimal = this.binaryToDecimal(binaryText);
      this.setState({
        decimalNumber: decimal,
        errorMessage: "",
      });
    } else {
      this.setState({
        decimalNumber: 0,
        errorMessage: "Non-binary entry!"
      });
    }
  }

  render() {
    const {binaryText, decimalNumber, errorMessage} = this.state;
    return (
      <div className="App">
        {errorMessage}
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={binaryText}
            onChange={(event) => this.setState({binaryText: event.target.value})}
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
}

export default App;
