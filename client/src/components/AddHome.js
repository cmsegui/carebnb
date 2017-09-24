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
         <div>
             <h1>Add A New Home</h1>
             <form onSubmit={this._addNewHome}>
                <div className="form-group">
                <h4>Home Image:
                 <input onChange={this._handleChange} type="text" name="img" value={this.state.home.img} />
                 </h4>
                 <h4>Description:
                 <input onChange={this._handleChange} type="text" name="description" value={this.state.home.description} />
                 </h4>
                 <h4>Address Line 1:
                 <input onChange={this._handleChange} type="text" name="addressLine1" value={this.state.home.addressLine1} />
                 </h4>
                 <h4>Address Line 2:
                 <input onChange={this._handleChange} type="text" name="addressLine2" value={this.state.home.addressLine2} />
                 </h4>
                 <h4>City:
                 <input onChange={this._handleChange} type="text" name="city" value={this.state.home.city} />
                 </h4>
                 <h4>State:
                 <input onChange={this._handleChange} type="selectbox" name="state" value={this.state.home.state} />
                 </h4>
                 <h4>Zipcode:
                 <input onChange={this._handleChange} type="text" name="zipcode" value={this.state.home.zipcode} />
                 </h4>
                 <h4>Rooms:
                 <input onChange={this._handleChange} type="number" name="rooms" value={this.state.home.rooms} />
                 </h4>
                 <h4>Guests:
                 <input onChange={this._handleChange} type="number" name="guests" value={this.state.home.guests} />
                 </h4>
                 <h4>Smoking:
                 <input onChange={this._handleChange} type="checkbox" name="smoking" value={this.state.home.smoking} />
                 </h4>
                 <h4>Kid-Friendly:
                 <input onChange={this._handleChange} type="checkbox" name="kids" value={this.state.home.kids} />
                 </h4>
                 <h4>Pet-Friendly:
                 <input onChange={this._handleChange} type="checkbox" name="pets" value={this.state.home.pets} />
                 </h4>
                 </div>
                <input type="submit" value="Submit" />
             </form>
         </div>
     )
    }
    }
   }

export default AddHome;