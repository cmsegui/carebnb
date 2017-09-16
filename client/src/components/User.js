import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class User extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }
  componentWillMount() {
    this._getUserData();
  }
  _getUserData = () => {
    const id = this.props.match.params.id;
    axios.get(`/api/user/${id}`)
      .then((res) => {
        this.setState({ users: res.data })
      }) 
      .catch((err) => {
        console.log(err);
      });
      console.log(this.state.user)
  } 

  render() {
    return (
      <div>
        <h2><Link to='/search'>ARE YOU SEARCHING FOR A HOME?</Link></h2>
          OR 
          
          <h2><Link to={`/user/${this.state.user._id}`}>DO YOU OWN A HOME?</Link></h2>   
      </div>
    )
  }
}
  
export default User;
