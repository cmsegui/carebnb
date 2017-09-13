import React, { Component } from 'react';
import User from './components/User';
import HomeList from './components/HomeList';
import IndHome from './components/IndHome';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/user" component={User} />
          <Route exact path="/search" component={HomeList} />
          {/* <Route exact path="/search" component={IndHome} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
