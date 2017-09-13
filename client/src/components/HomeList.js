import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


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
      const id = this.props.match.params.id;
    return (
      <div>
          <h1>HOMES</h1>
        {this.state.homes.map((home) => {
          return (<div key={home._id}>
            <Link to={`/search/${home._id}`}><img src={home.img} alt='homepic' /></Link>
            <div>{home.description}</div>
            </div>)
        })}
      </div>
    )
  }
}
  
export default HomeList;
