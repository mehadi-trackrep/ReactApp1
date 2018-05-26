import React from 'react'
import ReactDOM from 'react-dom'

class IncrementApp extends React.Component{  // Class type of Component
  constructor(props){
    super(props);
    this.state = {counter: 0}
    this.increment = this.increment.bind(this)
  }

  increment(e){ // e means event
    e.preventDefault(); // redirect prevention ..
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render(){
    return <button href='https://google.com' onClick={this.increment}>Value is {this.state.counter}</button>
  }
}


ReactDOM.render(
  <IncrementApp />,
  document.getElementById('root')
);
