import React from 'react'
import ReactDOM from 'react-dom'


function Cartoon(props){ // 'Cartoon' is a Component .. Condition: First letter Capital hobe; 'props' is properties
  return <h1>Hello, {props.name} on {props.place}</h1>  // here, name and place are the properties ..
}

function Show(){ // another Component
  return <div>
              <Cartoon name='Mehadi' place='Uniliver 5th floor'/>
              <Cartoon name='Motaher' place='Tafadar 5th floor'/>
         </div>
}

ReactDOM.render(
  <Show />, // Component gula ke evabe likhte hoy ..
  document.getElementById('root')
);
