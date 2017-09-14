import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: '', 
        password: '', 
        username: '',
        img: '',  
        isOwner: true,
        homes: []
      }
    }
  }
  componentWillMount() {
    this._getUserProfileData();
  }
  _getUserProfileData = () => {
    const id = this.props.match.params.id;
    console.log(id);
    axios.get(`/api/user/${id}`)
      .then((res) => {
        console.log(res.data)
        this.setState({ user: res.data })
      })
      .catch((err) => {
        console.log(err);
      });
  } 

  render() {
    return (
      <div>
          user profile
      </div>
    )
  }
}
  
export default UserProfile;
