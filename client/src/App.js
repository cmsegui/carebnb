import React, { Component } from 'react';
import HomeList from './components/HomeList';
import IndHome from './components/IndHome';
import EditHome from './components/EditHome';
import UserProfile from './components/UserProfile';
import SplashPage from './components/SplashPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddHome from './components/AddHome';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={SplashPage} />
          <Route exact path="/user/:id" component={UserProfile} />
          <Route exact path="/search" component={HomeList} />
          <Route exact path="/search/:id" component={IndHome} />
          <Route exact path="/user/:id/addHome" component={AddHome} />
          <Route exact path="/user/:userId/editHome/:id" component={EditHome} />
        </div>
      </Router>
    );
  }
}

export default App;
