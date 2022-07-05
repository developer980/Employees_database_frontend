import React from "react";
import "../components/header.css";
import {Link} from 'react-router-dom';

class Header extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
            const{enabled} = this.props;
            console.log(enabled);
            return(
                <div>
                <nav className="d-flex flex-row justify-content-around align-items-center">
                        <Link to="/" className="logo col-7">
                            myCompany
                        </Link>   
                    {
                        enabled == "add" ?    
                        <div className=" col-5 link-list"> 
                            <Link to="/adauga-angajat" className="text-decoration-none a">Add employee</Link>
                            <Link to="/lista-angajati" className="text-decoration-none current-page">Employees list</Link>
                            </div> 
                        : null
                        
                    }
                    {
                        enabled == "list" ?
                        <div className=" col-5 link-list">
                            <Link to="/adauga-angajat" className="text-decoration-none current-page">Add employee</Link>           
                            <Link to="/lista-angajati" className="text-decoration-none a">Employees list</Link> 
                            </div>
                        : null
                    }
                </nav>
                    </div>
            )
        }
    }
export default Header;