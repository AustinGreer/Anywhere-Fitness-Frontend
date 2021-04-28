import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './redux'
import './index.css';
import theme from './theme/index.js'
import {ThemeProvider} from 'styled-components'


const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(

    <Router>
      <Provider store={store}>
        <ThemeProvider theme = {theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();