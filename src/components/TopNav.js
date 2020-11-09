import React, { Component } from 'react';
import App from '../pages/App';
import { Link } from 'react-router-dom';

class TopNav extends Component {
    render() {
        return (
            <header className="col-md-10">
	    		<nav>
				   	<ul>
				    	<li>
				    		<Link to={`/`} ></Link>
				      	</li>	
				      	<li>
				    		<Link to={`/`} >Notifications</Link>
				      	</li>	
				      	<li>
				    		<Link to={`/`} >My Account</Link>
				      	</li>	    
				      	<li>
				      		<Link to={`/`} >Settings</Link>
				      	</li>	
				   	</ul>
			    </nav>
			</header>
        )
    }
}
export default TopNav