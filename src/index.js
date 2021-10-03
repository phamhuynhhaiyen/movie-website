import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './sass/index.scss'
import Layout from './component/Layout'
import AppProvider from './data/AppProvider';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Layout />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
