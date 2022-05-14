import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VdForm from './form1';
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
    <VdForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
