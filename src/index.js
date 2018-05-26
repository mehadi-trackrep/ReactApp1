import React from 'react'
import ReactDOM from 'react-dom'


function Message(props){
  if(props.Value){
    return <h1>This is the first message :D</h1>
  }else{
    return <h1>This is the Second message from Mehadi</h1>
  }
}

class Switch_between_two_button extends React.Component{
  constructor(props){
    super(props);
    this.state = {ck: true}
  }

  btnClick = () => {
    this.setState({
      ck: !this.state.ck
    });
  }

  render(){
    return <div>
              <button onClick={this.btnClick}>Click to see message</button>
              <Message Value={this.state.ck}/>
            </div>
  }
}


ReactDOM.render(
  <Switch_between_two_button />,
  document.getElementById('root')
);
