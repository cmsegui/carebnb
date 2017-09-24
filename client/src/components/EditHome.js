import React, { Component } from 'react';
import axios from 'axios';

class EditHome extends Component {
    userId = '';
    id = '';

    constructor() {
     super();
     this.state = {}
     this._handleChange = this._handleChange.bind(this);
    }
_editHome= e => {
    console.log('data saved');
    e.preventDefault();
    axios.put(`/api/user/${this.userId}/home/${this.id}`, this.state).then(res => {
    }).catch((err) => {
        console.log(err);
      });
};

_getHome= () => {
    console.log(`/api/user/${this.userId}/home/${this.id}`);
    axios.get(`/api/user/${this.userId}/home/${this.id}`).then(res => {
        this.setState(res.data.homes[0]);
        const {address} = this.state.address;
        console.log(this.state);
    }).catch((err) => {
        console.log(err);
      });
};

componentWillMount() {
    this.id = this.props.match.params.id;
    this.userId = this.props.match.params.userId;
    this._getHome();
}

_handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log('change', this.state);
}


render() {
     return(
         <div className="form-holder">
             <h1>Edit Your Home</h1>
             <form onSubmit={this._editHome}>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">Home Image:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="text" name="img" value={this.state.img} className="form-control" />
				</div>
                 </div>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">Description:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="text" name="description" value={this.state.description} className="form-control" />
				</div>
                 </div>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">Address Line 1:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="text" name="addressLine1" value={this.state.addressLine1} className="form-control" />
				</div>
                 </div>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">Address Line 2:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="text" name="addressLine2" value={this.state.addressLine2} className="form-control" />
				</div>
                 </div>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">City:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="text" name="city" value={this.state.city} className="form-control" />
				</div>
                 </div>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">State:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="selectbox" name="state" value={this.state.state} className="form-control" />
				</div>
                 </div>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">Zipcode:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="text" name="zipcode" value={this.state.zipcode} className="form-control" />
				</div>
                 </div>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">Rooms:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="number" name="rooms" value={this.state.rooms} className="form-control" />
				</div>
                 </div>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">Guests:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="number" name="guests" value={this.state.guests} className="form-control" />
				</div>
                 </div>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">Smoking:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="checkbox" name="smoking" checked={this.state.smoking} className="form-control" />
				</div>
                 </div>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">Kid-Friendly:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="checkbox" name="kids" checked={this.state.kids} className="form-control" />
				</div>
                 </div>
                 <div className="form-group row">
						<label className="col-sm-4 col-form-label" for="">Pet-Friendly:</label>
				<div className="col-sm-8">
                 <input onChange={this._handleChange} type="checkbox" name="pets" checked={this.state.pets} className="form-control" />
				</div>
                 </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
             </form>
         </div>
     )
    }
   }

export default EditHome;