import React, { Component } from 'react';
import axios from 'axios';

class EditHome extends Component {
  userId = '';
  id = '';
  home = {};

  _editHome = formData => {
    console.log('data saved');
    
    axios
      .put(`/api/user/${this.userId}/home/${this.id}`, formData)
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };

  _getHome = () => {
    console.log(`/api/user/${this.userId}/home/${this.id}`);
    axios
      .get(`/api/user/${this.userId}/home/${this.id}`)
      .then(res => {
        // this.setState(res.data.homes[0]);
        // const {address} = this.state.address;
        // console.log(this.state);
        this.home = res.data.homes[0];
        console.log('home', this.home);
        this._img.value = this.home.img || '';
        this._description.value = this.home.description || '';
        this._addressLine1.value = this.home.address.addressLine1 || '';
        this._addressLine2.value = this.home.address.addressLine2 || '';
        this._city.value = this.home.address.city || '';
        this._state.value = this.home.address.state || '';
        this._zipcode.value = this.home.address.zipcode || '';
        this._rooms.value = this.home.rooms || '';
        this._guests.value = this.home.guests || '';
        this._smoking.value = this.home.smoking || false;
        this._kids.value = this.home.kids || false;
        this._pets.value = this.home.pets || false;
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillMount() {
    this.id = this.props.match.params.id;
    this.userId = this.props.match.params.userId;
    this._getHome();
  }

  _handleSubmit = e => {
    e.preventDefault();
    const home = {};
    home.img = this._img.value;
    home.description = this._description.value;
    home.addressLine1 = this._addressLine1.value;
    home.addressLine2 = this._addressLine2.value;
    home.city = this._city.value;
    home.state = this._state.value;
    home.zipcode = this._zipcode.value;
    home.rooms = parseInt(this._rooms.value);
    home.guests = parseInt(this._guests.value);
    home.smoking = this._smoking.value;
    home.kids = this._kids.value;
    home.pets = this._pets.value;

    this.home = Object.assign(this.home, home);
    console.log('damon drives me nuts sometimes', this.home);
    this._editHome(this.home);
  };

  render() {
      console.log('render', this.home);
    return (
      <div className="form-holder">
        <h1>Edit Your Home</h1>
        <form onSubmit={this._handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Home Image:</label>
            <div className="col-sm-8">
              <input
                type="text"
                name="img"
                defaultValue={this.home.img}
                className="form-control"
                ref={input => (this._img = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Description:</label>
            <div className="col-sm-8">
              <input
                type="text"
                name="description"
                className="form-control"
                ref={input => (this._description = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Address Line 1:</label>
            <div className="col-sm-8">
              <input
                type="text"
                name="addressLine1"
                className="form-control"
                ref={input => (this._addressLine1 = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Address Line 2:</label>
            <div className="col-sm-8">
              <input
                type="text"
                name="addressLine2"
                className="form-control"
                ref={input => (this._addressLine2 = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">City:</label>
            <div className="col-sm-8">
              <input
                type="text"
                name="city"
                className="form-control"
                ref={input => (this._city = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">State:</label>
            <div className="col-sm-8">
              <input
                type="selectbox"
                name="state"
                className="form-control"
                ref={input => (this._state = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Zipcode:</label>
            <div className="col-sm-8">
              <input
                type="text"
                name="zipcode"
                className="form-control"
                ref={input => (this._zipcode = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Rooms:</label>
            <div className="col-sm-8">
              <input
                type="number"
                name="rooms"
                className="form-control"
                ref={input => (this._rooms = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Guests:</label>
            <div className="col-sm-8">
              <input
                type="number"
                name="guests"
                className="form-control"
                ref={input => (this._guests = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Smoking:</label>
            <div className="col-sm-8">
              <input
                type="checkbox"
                name="smoking"
                defaultChecked={this.home.smoking || false}
                className="form-control"
                ref={input => (this._smoking = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Kid-Friendly:</label>
            <div className="col-sm-8">
              <input
                type="checkbox"
                name="kids"
                defaultChecked={this.home.kids || false}
                className="form-control"
                ref={input => (this._kids = input)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">Pet-Friendly:</label>
            <div className="col-sm-8">
              <input
                type="checkbox"
                name="pets"
                defaultChecked={this.home.pets || false}
                className="form-control"
                ref={input => (this._pets = input)}
              />
            </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditHome;
