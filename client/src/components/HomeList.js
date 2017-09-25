import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class HomeList extends Component {
  constructor() {
    super();
    this.state = {
      homes: []
    }
  }
  componentWillMount() {
    this._getHomeData();
  }
  _getHomeData = () => {
    axios.get('/api/search/')
      .then((res) => {
        console.log(res.data)
        this.setState({ homes: res.data })
      }) 
      .catch((err) => {
        console.log(err);
      });
  } 

  render() {
    return (
      <div>
          <h1>Available Homes</h1>
        {this.state.homes.map((home) => {
          let mapslink = `http://www.google.com/maps/place/${home.address.latitude},${home.address.longitude}`;
          return (<div key={home._id}>
            <Link to={`/search/${home._id}`}><img src={home.img} alt='homepic'className="homelistimg" /></Link>
            <div className="homelistdes">{home.description}
              <br /><a href={mapslink} target="_maps">View on the Googles</a>
            </div>
            </div>)
        })}
      </div>
    )
  }
}
  
export default HomeList;
