import customData from './customData.json';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GetData extends Component {
	constructor() {
        super();

        this.state = {
            items: customData
        }
    }

    // readData = data => {
    // 	const allData = customData.data.map(data => data)

    // 	this.setState({
    // 		items: allData
    // 	})
    // }

    render() {
    	console.log(this.state.items);

    	this.state.items.data.map(data => data)

        return (
        	<>
        		{customData.data.map(data =>
           			<tr>
				    <td><span className={data.priority}></span> {data.number}</td>
				    <td>{data.title}</td>
				    <td>{data.cause}</td>
				    <td>{data.category}</td>
				    <td>{data.priority}</td>
				    <td>{data.actions}</td>
				    <td>{data.creator}</td>
				    <td>{data.status}</td>
				    <td>{data.created}</td>
				    <td>{data.expires}</td>
				    <td><button className="btn"><i aria-hidden="true" className="fa fa-edit"></i></button></td>
				    <td><button className="btn"><i aria-hidden="true" className="fa fa-trash"></i></button></td>
				  </tr>
           		)}
        	</>
        )
    }
}
export default GetData;