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
    // console.log(id);
    axios
      .get(`/api/user/${id}`)
      .then(res => {
        // console.log(res.data.homes);
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  _deleteHome = homeId => {
    const id = this.props.match.params.id;
    axios
      .delete(`/api/user/${id}/home/${homeId}`)
      .then(res => {
        let homes = this.state.user.homes.filter(home => {
          return home._id + '' === homeId;
        });
        let user = Object.assign({}, this.state.user, { homes: homes });
        this.setState({
          user: user
        });

        alert('Home Deleted');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div>
          <h3>Hi, {this.state.user.username}!</h3>
        </div>
        <div>
          <h4>These are your homes: </h4>
          {this.state.user.homes.map(home => {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div key={home._id}>
                      <Link to={`/search/${home._id}`}>
                        <img
                          src={home.img}
                          alt="homepic"
                          className="imgformat"
                        />
                      </Link>
                    </div>
                  </div>
                  <div class="col-6">
                    <div>{home.address.addressLine1}</div>
                    <div>{home.address.addressLine2}</div>
                    <div>{home.address.city}</div>
                    <div>{home.address.state}</div>
                    <div>{home.address.zipcode}</div>
                  </div>
                </div>
                <button type="button" className="btn btn-warning">
                  <Link
                    to={`/user/${this.state.user._id}/editHome/${home._id}`}
                    className="btntxtclr"
                  >
                    EDIT
                  </Link>
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this._deleteHome.bind(this, home._id)}
                >
                  DELETE
                </button>
              </div>
            );
          })}
        </div>
        <button type="button" className="btn btn-primary">
          <Link
            to={`/user/${this.props.match.params.id}/addHome`}
            className="btntxtclr"
          >
            ADD HOME
          </Link>
        </button>
      </div>
    );
  }
}

export default UserProfile;
