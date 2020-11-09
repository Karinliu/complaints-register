import React, { Component } from 'react';
import TopNav from '../components/TopNav';
import Title from '../components/Title';
import Table from '../ncip/components/Table';


class App extends Component {
    render() {
        return ( 
            <>
            <TopNav /> 
            <div className = "content-box col-md-10" >
                <div className="container-fluid">
                    <div className="row">
                        <Title text="Dashboard"/>
                    </div>
                    <Table/>
                    <nav className="container-fluid dashboard-nav mt-5">
                        <ul className="row">
                            <li className="col-sm-6 col-lg-3 col-xl-2"><button><i className="fa fa-th-large"></i><span>NCIP's overview</span></button></li>
                            <li className="col-sm-6 col-lg-3 col-xl-2"><button><i className="fa fa-paper-plane"></i><span>NCIP’s assigned to me</span></button></li>
                            <li className="col-sm-6 col-lg-3 col-xl-2"><button><i className="fa fa-object-group"></i><span>Clusters assigned to me</span></button></li>
                            <li className="col-sm-6 col-lg-3 col-xl-2"><button><i className="fa fa-edit"></i> <span>NCIP’s raised by me</span> </button></li>
                        </ul>
                    </nav>
                </div> 
            </div> 
            </>
        )
    }
}

export default App
