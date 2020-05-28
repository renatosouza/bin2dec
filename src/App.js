import React, { Component } from 'react';
import './App.css';

// O ERRO TEM A VER COM O LANCE DO BIND
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      binaryText: '',
      decimalNumber: 0,
    };
  }
  
  binaryToDecimal = (event) => {
    event.preventDefault();
    console.log(this.state);
    const {binaryText} = this.state; 
    // return parseInt(binary, 2);
    let decimal = 0;
    for(let i = binaryText.length-1; i>=0; i--){
      decimal += parseInt(binaryText[i])*Math.pow(2,binaryText.length-1-i);
    }
    this.setState({decimalNumber: decimal})
  }

  render() {
    const {binaryText, decimalNumber} = this.state;
    return (
      <div className="App">
        <form onSubmit={this.binaryToDecimal}>
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
