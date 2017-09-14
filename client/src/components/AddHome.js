import React, { Component } from 'react';
import axios from 'axios';

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
            kids: true,
            pets: true
        }
       }
    }
_addNewHome = e => {
    e.preventDefault();
    axios.post('/api/search', this.state).then(res => {
        console.log(res.data);
    });
};

_handleChange = (e) => {
    const newState = {...this.state.home}
    newState[e.target.name] = e.target.value
    this.setState({home: newState})
}

render() {
     return(
         <div>
             <h1>Add A New Home</h1>
             <form onSubmit={this._addNewHome}>
                 <div>Home Image:
                 <input onChange={this._handleChange} type="text" name="img" value={this.state.home.img} />
                 </div>
                 <div>Description:
                 <input onChange={this._handleChange} type="text" name="description" value={this.state.home.description} />
                 </div>
                 <div>Address Line 1:
                 <input onChange={this._handleChange} type="text" name="addressLine1" value={this.state.home.addressLine1} />
                 </div>
                 <div>Address Line 2:
                 <input onChange={this._handleChange} type="text" name="addressLine2" value={this.state.home.addressLine2} />
                 </div>
                 <div>City:
                 <input onChange={this._handleChange} type="text" name="city" value={this.state.home.city} />
                 </div>
                 <div>State:
                 <input onChange={this._handleChange} type="selectbox" name="state" value={this.state.home.state} />
                 </div>
                 <div>Zipcode:
                 <input onChange={this._handleChange} type="text" name="zipcode" value={this.state.home.zipcode} />
                 </div>
                 <div>Rooms:
                 <input onChange={this._handleChange} type="text" name="number" value={this.state.home.rooms} />
                 </div>
                 <div>Guests:
                 <input onChange={this._handleChange} type="text" name="number" value={this.state.home.guests} />
                 </div>
                 <div>Smoking:
                 <input onChange={this._handleChange} type="checkbox" name="smoking" value={this.state.home.smoking} />
                 </div>
                 <div>Kid-Friendly:
                 <input onChange={this._handleChange} type="checkbox" name="kids" value={this.state.home.kids} />
                 </div>
                 <div>Pet-Friendly:
                 <input onChange={this._handleChange} type="checkbox" name="pets" value={this.state.home.pets} />
                 </div>
                <input type="submit" value="Submit" />
             </form>
         </div>
     )
    }
   }

export default AddHome;