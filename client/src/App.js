import React, { Component } from 'react';
import User from './components/User';
import HomeList from './components/HomeList';
import IndHome from './components/IndHome';
import UserProfile from './components/UserProfile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddHome from './components/AddHome';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/user" component={User} />
          <Route exact path="/user/:id" component={UserProfile} />
          <Route exact path="/search" component={HomeList} />
          <Route exact path="/search/:id" component={IndHome} />
          <Route exact path="/addHome" component={AddHome} />
        </div>
      </Router>
    );
  }
}

export default App;
