import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    }
  }
  componentWillMount() {
    this._getUserData();
  }

  _getUserData = () => {
    axios.get('/api/user/')
      .then((res) => {
        this.setState({ users: res.data })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>The SneakerHeadz:</h1>
        {this.state.users.map((user) => {
          return (<div key={user.id}>
            <li>{user.userName}</li>
            <img src={user.img} alt='userpic' />
            <br/>
              <Link to={`/shoebox/${user.email}`}>Shoebox</Link>
            </div>)
        })}
      </div>
    );
  }
}

export default Users;
