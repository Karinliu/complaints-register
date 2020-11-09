import React, { Component } from 'react';
import TopNav from '../components/TopNav';
import Title from '../components/Title';
import MainForm from '../ncip/components/MainForm';


class AddNcip extends Component {
    submitHandler(e) {
        e.preventDefault();
    }

    render() {
        return ( 
            <>
            <TopNav /> 
            <div className = "content-box col-md-10" >
                <div className="container-fluid">
                    <div className="row">
                        <Title text="Add new NCIP"/>
                    </div>
                    <MainForm 
                        submitHandler={this.submitHandler}
                      />  
                </div> 
            </div> 
            </>
        )
    }
}

export default AddNcip