import React, { Component } from 'react';
import TopNav from '../components/TopNav';
import Title from '../components/Title';
import Table from '../ncip/components/Table'; 


class ManageList extends Component {
    render() {
        return ( 
            <>
            <TopNav /> 
            <div className = "content-box col-md-10" >
                <div className="container-fluid">
                    <div className="row">
                        <Title text="Manage list"/>
                    </div>
                    <Table/>
                </div> 
            </div> 
            </>
        )
    }
}

export default ManageList
