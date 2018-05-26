import React from 'react'
import ReactDOM from 'react-dom'

// class FormList extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {value:'initial_value'}
//   }
//
//   render(){
//     return <form>
//             <select></select>
//            </form>
//   }
// }

class UIPrintChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'PNG'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePrint = this.handlePrint.bind(this);
  }

  handlePrint() {
    if (this.state.value) {
      console.log(this.state.value);
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
          <option value="PNG">PNG Image</option>
          <option value="JPEG">JPEG Image</option>
          <option value="PDF">PDF Document</option>
          <option value="SVG">SVG Vector Image</option>
        </select>
        <button onClick={this.handlePrint}>Export Chart</button>
      </div>
    );
  }
}

ReactDOM.render(
  <UIPrintChart/>,
  document.getElementById('root')
);


 export default UIPrintChart;
