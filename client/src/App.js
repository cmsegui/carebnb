import React, { Component } from 'react';
import User from './components/User';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/user" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
