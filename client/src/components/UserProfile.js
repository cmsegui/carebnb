import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    };
  }
  componentWillMount() {
    this._getUserProfileData();
  }
  _getUserProfileData = () => {
    const id = this.props.match.params.id;
    console.log(id);
    axios
      .get(`/api/user/${id}`)
      .then(res => {
        console.log(res.data.homes);
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div>
          <img src={this.state.user.img} alt="userpic" />
        </div>
          <div>{this.state.user.username}</div>
          <div>{this.state.user.email}</div>
        <div>
          <h5>Your Homes: </h5>
          {this.state.user.homes.map(home => {
            return (
              <div>
              <Link to={`/user/${this.state.user._id}/editHome/${home._id}`}><img src={home.img} alt='homepic' /></Link>
                <div>Address of Home Goes Here</div>
              </div>
            );
          })}
        </div>
        <Link to={`/user/${this.props.match.params.id}/addHome`}>ADD HOME</Link>

      </div>
    );
  }
}

export default UserProfile;
