import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

import Home from './view/home/home';

class App2 extends Component {
  render() {
    return (
      <div className="App2">
        <Route exact component= {Home}></Route>
      </div>
    );
  }
}

export default App2;
