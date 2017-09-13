import React, { Component } from 'react';
import User from './components/User';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>HOMELESS? I GOTCHU!</h1>
          <Route exact path="/user/:id" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
