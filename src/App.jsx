import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToInput} className="but">7</Button>
            <Button handleClick={this.addToInput} className="but">8</Button>
            <Button handleClick={this.addToInput} className="but">9</Button>
            <Button handleClick={this.addToInput} className="but">/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} className="but">4</Button>
            <Button handleClick={this.addToInput} className="but">5</Button>
            <Button handleClick={this.addToInput} className="but">6</Button>
            <Button handleClick={this.addToInput} className="but">*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} className="but">1</Button>
            <Button handleClick={this.addToInput} className="but">2</Button>
            <Button handleClick={this.addToInput} className="but">3</Button>
            <Button handleClick={this.addToInput} className="but">+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} className="but">.</Button>
            <Button handleClick={this.addToInput} className="but">0</Button>
            <Button handleClick={() => this.handleEqual()} className="but">=</Button>
            <Button handleClick={this.addToInput} className="but">-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
