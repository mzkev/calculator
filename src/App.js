import React, { Component } from 'react';
import './App.css';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {number1: 0, number2: 0, results: 0};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleSubClick = this.handleSubClick.bind(this);
    this.handleMulClick = this.handleMulClick.bind(this);
    this.handleDivClick = this.handleDivClick.bind(this);
  };

  handleChange1(e){
    this.setState({number1:e.target.value});
  };

  handleChange2(e){
    this.setState({number2:e.target.value});
  };

  handleAddClick(e){
    e.preventDefault();
    const number1 = this.state.number1;
    const number2 = this.state.number2;
    this.setState(prevState => ({
      number1: 0 ,
      number2: 0,
      results: Number(number1) + Number(number2)
    }));
  };

  handleSubClick(e){
    e.preventDefault();
    const number1 = this.state.number1;
    const number2 = this.state.number2;
    this.setState(prevState => ({
      number1: 0 ,
      number2: 0,
      results: number1 - number2
    }));
  };

  handleMulClick(e){
    e.preventDefault();
    const number1 = this.state.number1;
    const number2 = this.state.number2;
    this.setState(prevState => ({
      number1: 0,
      number2: 0,
      results: number1 * number2
    }));
  };

  handleDivClick(e){
    e.preventDefault();
    const number1 = this.state.number1;
    const number2 = this.state.number2;
    this.setState(prevState => ({
      number1: 0,
      number2: 0,
      results: number1 / number2
    }));
  }

  render() {
    return (
      <div className="shadow">
        <h1> Calculator </h1>
        Number1&nbsp;&nbsp;&nbsp;&nbsp;<input className="input" type='number' onChange={this.handleChange1} value={this.state.number1} />
       <p> Number 2&nbsp;&nbsp;&nbsp;&nbsp;<input className="input" type='number' onChange={this.handleChange2} value={this.state.number2} /></p>
        <br />
        
        <button className="buttondiv" onClick={this.handleAddClick}> + </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="buttondiv"  onClick={this.handleSubClick}> - </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="buttondiv" onClick={this.handleMulClick}> * </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="buttondiv"  onClick={this.handleDivClick}> / </button>
        <br />
        <br />
        <p>Result <input className="input" type='number'value={this.state.results} /></p>
        </div>
    );
  }
}

export default App;
