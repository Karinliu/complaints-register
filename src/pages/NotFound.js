import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../components/TopNav';
import ErrorImage from '../assets/404.svg';


class NotFound extends Component {
    render() {
        return ( 
            <>
            <TopNav /> 
            <div className = "content-box col-md-10" >
                <div className="container-fluid error">
                    <div className="row">
                    	<img src={ErrorImage} alt=""/>
                    </div> 
                    <div className="row">
                    	<Link to="/">Back to dashboard</Link>
                    </div> 
                </div> 
            </div> 
            </>
        )
    }
}

export default NotFound;