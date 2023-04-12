import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ColorChangingComponent from './App';
import ChangeInputValue from './components/Changeinput';
import ToUpperCase from './components/Example4';
import FormData from './components/NameFirstname';
import ClickCounter from './components/Clickcounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorChangingComponent />
    <ChangeInputValue/>
    <ToUpperCase/>
    <FormData/>
    <ClickCounter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
