import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './page/Home'
import Killboard from './page/Killboard'
import './css/index.css'
import { Provider } from 'react-redux';
import { Store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <div className="app-container">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/killboard" exact={true} component={Killboard} />
            </Switch>
        </ BrowserRouter>
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
