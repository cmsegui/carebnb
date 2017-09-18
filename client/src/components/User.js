import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class User extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      kelly: {}
    }
  }
  componentWillMount() {
    this._getUserData();
  }
  _getUserData = () => {
    axios.get(`/api/user`)
      .then((res) => {
        let kelly = res.data[1];
        this.setState({ users: res.data, kelly: kelly });

      }) 
      .catch((err) => {
        console.log(err);
      });
  } 

  render() {
    return (
      <div>
        <h2><Link to='/search'>ARE YOU SEARCHING FOR A HOME?</Link></h2>
          OR 
          
          <h2><Link to={`/user/${this.state.kelly._id}`}>DO YOU OWN A HOME?</Link></h2>   
      </div>
    )
  }
}
  
export default User;
