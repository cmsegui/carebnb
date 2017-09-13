import React, { Component } from 'react';
import axios from 'axios';


class User extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentWillMount() {
    this._getUserData();
  }
  _getUserData = () => {
    //const id = this.props.match.params.id;
    axios.get('/api/user/')
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
        {this.state.users.map((user) => {
          return (<div key={user.id}>
            <h1>{user.username}</h1>
            <img src={user.img} alt='userpic' />
            </div>)
        })}
      </div>
    )
  }
}
  
export default User;
