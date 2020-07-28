import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Register from './view/register/register';
import Login from './view/login/login';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
      </div>
    );
  }
}

export default App;
