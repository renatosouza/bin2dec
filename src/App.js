import React, { useState } from 'react';
import { Form, Label, Input, FormFeedback, Button, Col, Row } from 'reactstrap';

const App = () => {
  const [binaryText, setBinaryText] = useState("");
  const [decimalNumber, setDecimalNumber] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");


  const binaryToDecimal = (binary) => {
    let decimal = 0;
    for(let i = binary.length-1; i>=0; i--){
      decimal += parseInt(binary[i], 10)*Math.pow(2,binary.length-1-i);
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
    <div>
      <Form onSubmit={handleFormSubmit}>
        <Row form className="m-sm-2 form-group">
          <Col sm={2} className="mt-sm-1">
            <Label>Binary Input: </Label>
          </Col>
          <Col sm={4}>
            <Input 
              type="text" 
              value={binaryText} 
              onChange={(event) => setBinaryText(event.target.value)}
              invalid={Boolean(errorMessage)}
            />
            <FormFeedback>{errorMessage}</FormFeedback>
          </Col>
          <Col>
            <Button className="ml-sm-2" color="secondary" type="submit">
              Convert!
            </Button>
          </Col>
        </Row>
        <Row form className="m-sm-2 form-group">
          <Col sm={2} className="mt-sm-1">
            <Label>Decimal Output: </Label>
          </Col>
          <Col sm={4}>
            <Input 
              readOnly
              value={decimalNumber}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default App;
