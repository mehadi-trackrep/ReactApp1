import React from 'react'
import ReactDOM from 'react-dom'


const names = ['Mehadi', 'Hasan', 'Uzzal']

function ListItems(props){
  const values = props.items
  const lists = values.map( (values,index) => <li key={index}>{values}</li> )  // 'index' is used for unique key of every listitems
  return <ul>
          {lists}
         </ul>
}

ReactDOM.render(
  <ListItems items={names}/>,
  document.getElementById('root')
);
