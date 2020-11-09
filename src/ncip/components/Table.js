import React, { Component } from 'react'
import GetData from '../../services/GetData';

class Table extends Component {
  render() {
    return (
    	<>
    		
    	    <div className="row table-tab">
    	    	<div className="container-fluid">
            	<nav className="">
            		<ul className="row">
            			<li className=""><button><i aria-hidden="true" className="fa fa-bars"></i>All NCIP</button></li>
            			<li className=""><button><i aria-hidden="true" className="fa fa-spinner"></i>In progress</button></li>
            			<li className=""><button><i aria-hidden="true" className="fa fa-exclamation-circle"></i>Major</button></li>
            			<li className=""><button><i aria-hidden="true" className="fa fa-chevron-left"></i>Minor</button></li>
            			<li className=""><button><i aria-hidden="true" className="fa fa-bar-chart"></i>Improvement</button></li>
            			<li className=""><button><i aria-hidden="true" className="fa fa-history"></i>Expired</button></li>
            		</ul>
            	</nav>
            	<div className="bottom-tab">
            		<label>
						<input placeholder="Search" type="text"/>
					</label>

					<button><i aria-hidden="true" className="fa fa-caret-left"></i></button>
					<button><i aria-hidden="true" className="fa fa-caret-right"></i></button>
            	</div>
            	</div>
			</div>
			<div className="outer">
				<div className="inner">
				<table className="container-fluid">
				<thead>
					  <tr>
					    <th scope="col"><span></span> Number</th>
					    <th scope="col">Title</th>
					    <th scope="col">Cause</th>
					    <th scope="col">Category</th>
					    <th scope="col">Priority</th>
					    <th scope="col">Actions</th>
					    <th scope="col">Creator</th>
					    <th scope="col">Status</th>
					    <th scope="col">Created</th>
					    <th scope="col">Expires</th>
					    <th scope="col"></th>
					    <th scope="col"></th>
					  </tr>
				  </thead>
				  <tbody>
				  	<GetData />
				  </tbody>
				</table>
				</div>
			</div>

			</>
	)
  }
}
export default Table