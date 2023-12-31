// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Assuming you have an App component
import Main from './components/Main';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <App/>
      <Main />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
