import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Users extends Component {
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
        {this.state.user.map((user) => {
          return (<div key={user.id}>
            <h1>{user.username}'s Profile</h1>
            <img src={user.img} alt='userpic' />
            </div>)
        })}
      </div>
    )
  }
}
  
export default Users;
