import React from 'react'
import ReactDOM from 'react-dom'

class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state = {scale: 'c', temp:0}
  }

  handleCelsius = (e) =>{  // arow function
    this.setState({
      scale: 'c',
      temp: e.target.value
    })
  }

  handleFahrenheit = (e) =>{
    this.setState({
      scale: 'f',
      temp: e.target.value
    })
  }

  render(){
    const temp = this.state.temp
    const scale = this.state.scale
    const celsius = (scale == 'f') ? convert(temp, toCelsius) : temp
    const fahrenheit = (scale == 'c') ? convert(temp, toFahrenheit) : temp

    return(
      <div>
        <Inputs scaleName='Celsius' value={celsius} handleFunction={this.handleCelsius}/>
        <Inputs scaleName='Fahrenheit' value={fahrenheit} handleFunction={this.handleFahrenheit}/>
      </div>
    )
  }
}

function convert(temp, functionName){
  return functionName(temp)
}

function toCelsius(fahrenheit_value){
  return (fahrenheit_value-32)*5/9
}

function toFahrenheit(celsius_value){
  return (celsius_value*9)/5 + 32 
}

class Inputs extends React.Component{
  render(){
    return(
          <fieldset>
            <legend>Scale {this.props.scaleName}</legend>
            <input value={this.props.value} onChange={this.props.handleFunction}/>
          </fieldset>
    )
  }
}

ReactDOM.render(
  <Calculator/>,
  document.getElementById('root')
);
