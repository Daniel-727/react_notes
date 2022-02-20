import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; //adding bootstrap css required for reactstrap

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //when we first create a react app, this is the code. There is a index.html file in public that has a div with an id of 'root'. So it seems like app.js is contained in this index.js which is then shown in the index.html file specifically in the div with an id of 'root'. But doesn't document.getElemendById bring the root into this index.js file? How does index.js actually connect index.html and app.js?
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
