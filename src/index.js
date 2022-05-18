import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Reducess from './reduce/reduce';
//import Menu from './form/homework';
//import Vd3 from './form/vd3';
//import Score from './form/hk';
//import Vd2 from './form/vd2';
//import VdForm from './form1';
//import Form2 from './form2';
//import App from './App';
//import State from './state'; 
//import One from './One';
//import Car from './vd4';
//import Vd from './VD5';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reducess/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
