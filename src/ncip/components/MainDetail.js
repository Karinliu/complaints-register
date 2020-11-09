import React, { Component } from 'react';
import SubNav from '../../components/SubNav';

class MainDetail extends Component {
    render() {
        return (
        	<>
        	<SubNav/>
            <div className="row">
	            <form className="container-fluid" onSubmit={this.props.submitHandler} action="">
	    		<fieldset className="row">
	    			<label className="col-6"> 
	    				Location
		               	<input 
		               		type="text" 
		               		placeholder="Location"
		               	/>
					</label>
					<label className="col-3"> 
	    				Impact of NCIP
		               	<select>
		               		<option value="">Select your option</option>
							<option value="Minor">Minor</option>
							<option value="Major">Major</option>
							<option value="Improvement">Improvement</option>
						</select>
					</label>
					<label className="col-3"> 
	    				Date
						<input 
		               		type="date"
		               		name="date"
		               	/>
					</label>
	    		</fieldset>

	    		<fieldset className="row">
	    			<label className="col-6"> 
	    				Type of NCIP
		               	<select>
						  <option value="">Select your option</option>
						  <option value="Type">Type</option>
						  <option value="Type">Type</option>
						  <option value="Type">Type</option>
						</select>
					</label>
	    		</fieldset>
	    		<fieldset className="row">
	    			<label className="col-6"> 
						Short summary of the problem or suggestion for improvement
						<textarea name="summary" placeholder="Type here your description"></textarea>
		            </label>
		            <label className="col-6"> 
						Direct action (correction)
						<textarea name="summary" placeholder="Type here your text"></textarea>
		            </label>
	    		</fieldset>
	    	</form>
        </div>
        </>
        )
    }
}
export default MainDetail