import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

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
      },
      redirect: false
    };
  }

  componentWillMount() {
    this._getUserProfileData();
  }
  _getUserProfileData = () => {
    const id = this.props.match.params.id;
    axios.get(`/api/user/${id}`)
      .then(res => {
        this.setState({ user: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  _deleteHome = (homeId, e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    axios.delete(`/api/user/${id}/home/${homeId}`)
      .then(res => {
        this._getUserProfileData()
          alert('Home Deleted');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.redirect) {
      <Redirect to={`/user/${this.props.match.params.id}`} />
    } 
    else {
      return (
      <div>
        <div>
          <h1>Hi, {this.state.user.username}!</h1>
        </div>
        <div>
          <h3 className="inline-header">These are your homes: </h3>
          <button type="button" className="btn btn-outline-primary add-button">
          <Link
            to={`/user/${this.props.match.params.id}/addHome`}
            className="btntxtclr">
            ADD HOME
          </Link>
        </button>
          {this.state.user.homes.map(home => {
            let mapslink = `http://www.google.com/maps/place/${home.address.latitude},${home.address.longitude}`;
            return (
              <div key={home._id} className="clearfix">
                  <div className="home">
                      <Link to={`/search/${home._id}`}>
                        <img src={home.img} alt="homepic" className="imgformat"/>
                      </Link>
                  <div className="addy">
                    <div>{home.address.addressLine1}</div>
                    <div>{home.address.addressLine2}</div>
                    <div>{home.address.city}</div>
                    <div>{home.address.state}</div>
                    <div>{home.address.zipcode}</div>
                    <a href={mapslink} target="_maps">View on the Googles</a>
                  </div>
                  <div className="button-bar">
                  <button type="button" className="btn btn-outline-warning">
                    <Link
                      to={`/user/${this.state.user._id}/editHome/${home._id}`}
                      className="btntxtclr">
                      EDIT
                    </Link>
                  </button>
                  <button type="button" className="btn btn-outline-danger"
                    onClick={this._deleteHome.bind(this, home._id)}>
                    DELETE
                  </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
  }
}

export default UserProfile;
