import React, { Component } from "react";
import "./calculator.css";

class Calculator extends Component {

  state = { displayValue: "0", prevNumber: null, operatorEntered: null , waitingForOperand: false};
  handleClickDigit = digit => {
    const {waitingForOperand, displayValue} = this.state;
    if (waitingForOperand) {
      this.setState({ displayValue: digit , waitingForOperand: false});
    }
    else{
      this.setState({displayValue: displayValue === "0" ?  String(digit) : displayValue + String(digit)} );
    }

    
  };

  handleResest = () => {
    this.setState({ displayValue: "0" , prevNumber: null, operatorEntered: null});
  };

  handleOperation = (operator) => {
    const{ displayValue} = this.state;
    this.setState({prevNumber: parseFloat(displayValue), operatorEntered : operator, waitingForOperand: true});
    
  }

  handleEquals = (nextNumber) => {
      const nxtNumber = parseFloat(nextNumber);
      const result = this.operations(nxtNumber );
      this.setState({displayValue: String(result), operatorEntered: null});
  }

  operations = ( nextNumber) => {
    const{prevNumber, operatorEntered} = this.state;
    if (operatorEntered === "+") {
      return prevNumber + nextNumber;
    }
    if (operatorEntered === "-") {
      return prevNumber - nextNumber;
    }
    if (operatorEntered === "x") {
      return prevNumber * nextNumber;
    }
    if (operatorEntered === "/") {
      return prevNumber / nextNumber;
    }
  };

  render() {
    return (
      
      <div id="calc-contain">
        <form name="calculator">
        
          <input type="text" name="answer" value={this.state.displayValue} />

          <input
            type="button"
            value=" 1 "
            onClick={() => this.handleClickDigit("1")}
          />
          <input
            type="button"
            value=" 2 "
            onClick={e => this.handleClickDigit("2")}
          />
          <input
            type="button"
            value=" 3 "
            onClick={e => this.handleClickDigit("3")}
          />
          <input
            type="button"
            value=" + "
            onClick={() => this.handleOperation("+")}
          />

          <input
            type="button"
            value=" 4 "
            onClick={e => this.handleClickDigit("4")}
          />
          <input
            type="button"
            value=" 5 "
            onClick={e => this.handleClickDigit("5")}
          />
          <input
            type="button"
            value=" 6 "
            onClick={e => this.handleClickDigit("6")}
          />
          <input
            type="button"
            value=" - "
            onClick={() => this.handleOperation("-")}
          />

          <input
            type="button"
            value=" 7 "
            onClick={e => this.handleClickDigit("7")}
          />
          <input
            type="button"
            value=" 8 "
            onClick={e => this.handleClickDigit("8")}
          />
          <input
            type="button"
            value=" 9 "
            onClick={e => this.handleClickDigit("9")}
          />
          <input
            type="button"
            value=" x "
            onClick={() => this.handleOperation("x")}
          />

          <input
            type="button"
            value=" c "
            onClick={() => this.handleResest()}
          />
          <input
            type="button"
            value=" 0 "
            onClick={() => this.handleClickDigit("0")}
          />
          <input
            type="button"
            value=" = "
            onClick={()=> this.handleEquals(this.state.displayValue)}
          />
          <input
            type="button"
            value=" / "
            onClick={() => this.handleOperation("/")}
          />
          
        </form>
      </div>
    );
  }
}

export default Calculator;
