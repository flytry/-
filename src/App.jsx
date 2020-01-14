import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact Component={Home}/>
        <Route path="/login" Component={Login}/>
      </Router>
    )
  }
}
