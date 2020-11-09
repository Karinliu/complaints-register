import React, { Component } from 'react'
import AssignNcip from './AssignNcip';
import AddDetailsNcip from './AddDetailsNcip';

class MainForm extends Component {
	constructor(props) {
    super(props);
	    this.state = {
	    	addClass: ''
		}
	}

	clickedAssign() {
		this.setState({addClass: 'assign'});
	}

	clickedDetails() {
		this.setState({addClass: 'details'});
	}

    render() {
    	let toggleClassSee = ['d-block'];

	    if(this.state.addClass) {
	    	toggleClassSee.push('d-none');
	    }else{
	    	toggleClassSee.push('d-block');
	    }

	   let element;

	   if (this.state.addClass === 'details') {
	     element =(
	     	<div className="d-block">
	   	  <AddDetailsNcip/>
	     </div>
	     )
	   } else if(this.state.addClass === 'assign') {
	     element =(
	     	<div className="d-block">
	   			<AssignNcip />
	       </div>
	     )
	   }

        return (
            <div className="row">
	            <form className="container-fluid" onSubmit={this.props.submitHandler} action="">
	    		<fieldset className="row">
	    			<label className="col-md-6"> 
	    				Location
		               	<input 
		               		type="text" 
		               		placeholder="Location"
		               	/>
					</label>
					<label className="col-md-3 col-sm-6"> 
	    				Impact of NCIP
		               	<select>
		               		<option value="">Select your option</option>
							<option value="Minor">Minor</option>
							<option value="Major">Major</option>
							<option value="Improvement">Improvement</option>
						</select>
					</label>
					<label className="col-md-3 col-sm-6"> 
	    				Date
						<input 
		               		type="date"
		               		name="date"
		               	/>
					</label>
	    		</fieldset>

	    		<fieldset className="row">
	    			<label className="col-md-6"> 
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
	    			<label className="col-md-6"> 
						Short summary of the problem or suggestion for improvement
						<textarea name="summary" placeholder="Type here your description"></textarea>
		            </label>
		            <label className="col-md-6"> 
						Direct action (correction)
						<textarea name="summary" placeholder="Type here your text"></textarea>
		            </label>
	    			
	    		</fieldset>

	    		<fieldset className="row btn-list " className={toggleClassSee.join('row btn-list ')}>
		    		<label className="col-md-3 col-sm-4">
		    			<input type="submit" value="Add details" onClick={this.clickedDetails.bind(this)}/>
		    		</label>
		    		<label className="col-md-3 col-sm-4">
		    			<input type="submit" value="Assign NCIP" onClick={this.clickedAssign.bind(this)}/>
		    		</label>
		    		<label className="col-md-3 col-sm-4">
		    			<input type="submit" value="Update NCR"/>
		    		</label>
	    		</fieldset>

	    		{element}

	    	</form>
        </div>
        )
    }
}
export default MainForm