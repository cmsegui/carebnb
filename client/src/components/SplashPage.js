import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SplashPage extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      kelly: {}
    };
  }
  componentWillMount() {
    this._getUserData();
  }
  _getUserData = () => {
    axios
      .get(`/api/user`)
      .then(res => {
        let kelly = res.data[1];
        this.setState({ users: res.data, kelly: kelly });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="splash">
        <h1 className="header-giant">Community BnB</h1>
        <img src="https://i.imgur.com/CEDq1iz.png" alt="treehouse" id="hand-img"/>
        <div className="button-bar1">
          <Link to={`/user/${this.state.kelly._id}`}>
            <a className="btn btn-success btn-lg" role="button">
              I share my home
            </a>
          </Link>
        </div>
        <div className="button-bar2">
          <Link to="/search">
            <a className="btn btn-success btn-lg" role="button">
              I am seeking housing
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default SplashPage;
