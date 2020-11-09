import React, { Component } from 'react'

class AssignNcip extends Component {
    render() {
        return (
        	<>
            <fieldset className="row">
	            <label className="col-md-3 col-sm-6"> 
	    				Assigned location
						<input 
		               		type="text"
		               		placeholder="Location"
		               	/>
				</label>  
				<label className="col-md-3 col-sm-6"> 
	    				Assignee
						<input 
		               		type="text"
		               		placeholder="Find user"
		               	/>
				</label>      	
			</fieldset>
			<fieldset className="row btn-list">
		    		<label className="col-md-3 col-sm-6">
		    			<input type="submit" value="Create NCIP"/>
		    		</label>
		    		<label className="col-md-3 col-sm-6">
		    			<input type="submit" value="Update NCR"/>
		    		</label>
			</fieldset>
			</> 
        )
    }
}
export default AssignNcip