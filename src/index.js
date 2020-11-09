import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './sass/index.scss';
import App from './pages/App';
import AddNcip from './pages/AddNcip';
import ManageList from './pages/ManageList';
import RequiredForms from './pages/RequiredForms';
import DetailNcip from './pages/DetailNcip';
import NotFound from './pages/NotFound'
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
	    <aside className="col-md-2 sticky-top">
			<nav>
				<label htmlFor="menuToggle" className="menu-icon">
					<i className="fa fa-bars"></i>
					<Link to="/">LOGO</Link>
				</label>
				<input id="menuToggle" type="checkbox"/>
				<ul>
					<li>
						<Link to="/">LOGO</Link>
				  	</li>
					<li>
						<Link to="/"><i className="fa fa-bar-chart"></i> Dashboard </Link>
				  	</li>
				  	<li>
						<Link to="/add"><i className="fa fa-plus-square"></i> Add new NCIP</Link>
				  	</li>	
				  	<li>
						<Link to="/list"><i className="fa fa-list"></i> Manage List</Link>
				  	</li>				      	
				  	<li>
						<Link to="/requiredforms"><i className="fa fa-folder"></i>Required Forms</Link>
				  	</li>		    	
				</ul>
			</nav>
		</aside>
		<Switch>
        	<Route exact path="/" component={App} />
        	<Route exact path="/add" component={AddNcip} />
        	<Route exact path="/list" component={ManageList} />
        	<Route exact path="/requiredforms" component={RequiredForms} />
        	<Route exact path="/detail" component={DetailNcip} />
        	<Route component={NotFound} />
      </Switch>
  </Router>
)

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
