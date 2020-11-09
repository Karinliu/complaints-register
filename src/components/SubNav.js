import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubNav extends Component {
    render() {
        return (
	    		<nav className="subnav">
				   	<ul>
				    	<li>
				    		<Link className="step" to={`/`} ></Link>
				    		<br />
				    		<Link className="title" to={`/`} >NCIP classification</Link>
				      	</li>	
				      	<li>
				    		<Link className="step" to={`/`} ></Link>
				    		<br />
				    		<Link className="title" to={`/`} >NCIP descriptions</Link>
				      	</li>	
				      	<li>
				    		<Link className="step" to={`/`} ></Link>
				    		<br />
				    		<Link className="title" to={`/`} >Propose for closing</Link>
				      	</li>	    
				      	<li>
				      		<Link className="step" to={`/`} ></Link>
				      		<br />
				    		<Link className="title" to={`/`} >Verification</Link>
				      	</li>	
				      	<li>
				      		<Link className="step" to={`/`} ></Link>
				      		<br />
				    		<Link className="title" to={`/`} >Closed</Link>
				      	</li>	
				   	</ul>
			    </nav>
        )
    }
}
export default SubNav