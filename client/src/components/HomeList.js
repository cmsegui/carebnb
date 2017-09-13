import React, { Component } from 'react';
import axios from 'axios';

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
        this.setState({ homes: res.data })
      }) 
      .catch((err) => {
        console.log(err);
      });
      console.log(this.state.home)
  } 

  render() {
    return (
      <div>
          <h1>HOMES</h1>
        {this.state.homes.map((home) => {
          return (<div key={home.id}>
            <img src={home.img} alt='homepic' />
            <div>{home.description}</div>
            </div>)
        })}
      </div>
    )
  }
}
  
export default HomeList;
