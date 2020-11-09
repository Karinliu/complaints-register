import React, { Component } from 'react'

class AddDetailsNcip extends Component {
    render() {
        return (
        	<>
            <fieldset className="row smart-list">
				<label className="col-md-6"> 
	    			Problem
		            <select>
						<option value="" selected>Select your option</option>
						<option value="Problem">Problem</option>
						<option value="Problem">Problem</option>
						<option value="Problem">Problem</option>
					</select>
				</label>   
				<label className="col-md-6 col-offset-6"> 
	    			Product group
		            <select>
						<option value="" selected>Select your option</option>
						<option value="Test">Test</option>
						<option value="Test">Test</option>
					</select>
				</label> 
				<label className="col-md-6 col-offset-6"> 
	    			Production location, storage location or central office
		            <select>
						<option value="" selected>Select your option</option>
						<option value="Test">Test</option>
						<option value="Test">Test</option>
					</select>
				</label> 
				<label className="col-md-6 col-offset-6"> 
	    			Cause
		            <select>
						<option value="" selected>Select your option</option>
						<option value="Test">Test</option>
						<option value="Test">Test</option>
					</select>
				</label> 	
			</fieldset>
			<fieldset className="row btn-list">
		    		<label className="col-md-3 col-sm-6">
		    			<input type="submit" value="Skip classification"/>
		    		</label>
		    		<label className="col-md-3 col-sm-6">
		    			<input type="submit" value="Update NCR"/>
		    		</label>
			</fieldset>
			</> 
        )
    }
}
export default AddDetailsNcip