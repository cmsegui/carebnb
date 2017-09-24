import React, { Component } from 'react';
import axios from 'axios';
import { Redirect }  from 'react-router-dom';

class AddHome extends Component {
    constructor() {
     super();
     this.state = {
        home: {
            img: '',
            description: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipcode: '',
            rooms: 0,
            guests: 0,
            smoking: false,
            kids: false,
            pets: false
        },
        redirect: false
       }
    }
_addNewHome = e => {
    console.log('data saved');
    e.preventDefault();
    axios.post(`/api/user/${this.props.match.params.id}/home`, this.state.home)
    .then((res) => {
        console.log('hit the then part')
        const newState  = {...this.state}
        newState.redirect = true
        this.setState(newState)
    })
    .catch((err) => {
        console.log(err);
      });
      
};

_handleChange = (e) => {
    const newState = {...this.state.home}
    newState[e.target.name] = e.target.value
    this.setState({home: newState})
}

render() {
    if (this.state.redirect) {
        return (
            <Redirect to={`/user/${this.props.match.params.id}`} />
        )
    } else {
     return(
         <div className="form-holder">
             <h1>Add A New Home</h1>
             <form onSubmit={this._addNewHome}>
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
   }

export default AddHome;