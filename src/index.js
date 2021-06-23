import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";



// axios.defaults.baseURL = 'https://todoapp-c9b89-default-rtdb.europe-west1.firebasedatabase.app'
// when we have one base url for all of the project



ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
