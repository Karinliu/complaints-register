import React, { Component } from 'react'

class Title extends Component {
  render() {
    return (
    	<div className="col-12">
    		<h1>{this.props.text}</h1> <hr /> 

    	</div>
	)
  }
}
export default Title