import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
class IndHome extends Component {
  constructor() {
    super();
    this.state = {
      home: {}
    }
  }
  componentWillMount() {
    this._getOneHomeData();
  }
  _getOneHomeData = () => {
    const id = this.props.match.params.id;
    console.log(id);
    axios.get(`/api/search/${id}`)
      .then((res) => {
        console.log(res.data)
        this.setState({ home: res.data })
      })
      .catch((err) => {
        console.log(err);
      });
  }
 
  render() {
      const home = this.state.home;
    return (
          <div className="container">
          <div className="row">
              <div className="col-2">
              </div>
              <div className="col-8">
              <img src={home.img} alt='homepic' />
              </div>
              <div className="col-2">
              </div>
          </div>
  
          <div className="row">
              <div className="col-10">
              <div>{home.description}</div>
              </div>
          </div>
  
          <a href="email:kelly@email.com">Click Here to Email</a>
  
          <div className="container">
              <div className="bottom-bordered">
                  <div className="row">
                      <div className="col">
                      <div>Kid-Friendly: {home.kids}</div>
                      </div>
                      <div className="col">
                          YES
                      </div>
                  </div>
              </div>
              <div className="bottom-bordered">
                  <div className="row">
                      <div className="col">
                      <div>Pet-Friendly: {home.pets}</div>
                      </div>
                      <div className="col">
                          YES
                      </div>
                  </div>
              </div>
              <div className="bottom-bordered">
                  <div className="row">
                      <div className="col">
                      <div>Rooms: {home.rooms}</div>
                      </div>
                  </div>
              </div>
              <div className="bottom-bordered">
                  <div className="row">
                      <div className="col">
                      <div>Guests: {home.guests}</div>
                      </div>
                  </div>
              </div>
              <div className="bottom-bordered">
                  <div className="row">
                      <div className="col">
                      <div>Smoking: {home.smoking}</div>
                      </div>
                      <div className="col">
                          NO
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
 
export default IndHome;