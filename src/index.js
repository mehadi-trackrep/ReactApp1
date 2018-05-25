import React from 'react'
import ReactDOM from 'react-dom'

// 'let' diye variable mean kore ..
let clock = function(){
  return <h3>Now time is <h1>{new Date().toLocaleTimeString()}</h1></h3>
}

setInterval(function(){
  ReactDOM.render(
    clock(),
    document.getElementById('root')
  );
},1000);
