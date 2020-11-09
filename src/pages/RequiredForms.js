import React, { Component } from 'react';
import TopNav from '../components/TopNav';
import Title from '../components/Title';


class RequiredForms extends Component {
    render() {
        return ( 
            <>
            <TopNav /> <
            div className = "content-box col-md-10" >
            <div className="container-fluid">
                    <div className="row">
                    <Title text="Required forms"/>
                    </div>
                  </div> 
            </div> 
            </>
        )
    }
}

export default RequiredForms
