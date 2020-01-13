import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/" exact Component={Home}/>
        <Route path="/login" Component={Login}/>
        </Switch>
      </Router>
    )
  }
}
