import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SplashPage extends Component {
    render() {
        return(
            <div>
                <div>
                <h1 className="">Community BnB</h1>
            <img src="https://i.imgur.com/JOvnDePh.jpg"/>
            </div>
            <div>
                <Link to='/user'>WELCOME</Link>
            </div>

                
            </div>
            
        )
    }
}

export default SplashPage;