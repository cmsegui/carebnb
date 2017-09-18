import React, { Component } from 'react';
import axios from 'axios';

class EditHome extends Component {
    userId = '';
    id = '';

    constructor() {
     super();
     this.state = {}
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
        this.setState(res.data);
        console.log(res.data);
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
}


render() {
     return(
         <div>
             <h1>Edit Your Home</h1>
             <form onSubmit={this._addNewHome}>
                 <h4>Home Image:
                 <input onChange={this._handleChange} type="text" name="img" value={this.state.img} />
                 </h4>
                 <h4>Description:
                 <input onChange={this._handleChange} type="text" name="description" value={this.state.description} />
                 </h4>
                 <h4>Address Line 1:
                 <input onChange={this._handleChange} type="text" name="addressLine1" value={this.state.addressLine1} />
                 </h4>
                 <h4>Address Line 2:
                 <input onChange={this._handleChange} type="text" name="addressLine2" value={this.state.addressLine2} />
                 </h4>
                 <h4>City:
                 <input onChange={this._handleChange} type="text" name="city" value={this.state.city} />
                 </h4>
                 <h4>State:
                 <input onChange={this._handleChange} type="selectbox" name="state" value={this.state.state} />
                 </h4>
                 <h4>Zipcode:
                 <input onChange={this._handleChange} type="text" name="zipcode" value={this.state.zipcode} />
                 </h4>
                 <h4>Rooms:
                 <input onChange={this._handleChange} type="number" name="rooms" value={this.state.rooms} />
                 </h4>
                 <h4>Guests:
                 <input onChange={this._handleChange} type="number" name="guests" value={this.state.guests} />
                 </h4>
                 <h4>Smoking:
                 <input onChange={this._handleChange} type="checkbox" name="smoking" checked={this.state.smoking} />
                 </h4>
                 <h4>Kid-Friendly:
                 <input onChange={this._handleChange} type="checkbox" name="kids" checked={this.state.kids} />
                 </h4>
                 <h4>Pet-Friendly:
                 <input onChange={this._handleChange} type="checkbox" name="pets" checked={this.state.pets} />
                 </h4>
                <input className="btn btn-primary" type="submit" value="Submit" />
             </form>
         </div>
     )
    }
   }

export default EditHome;