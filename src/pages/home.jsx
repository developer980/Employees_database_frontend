import React from "react";
import {Link} from 'react-router-dom';
import Layout from '../components/layout';
import Add from '../images/add.png';
import List from '../images/list.png';
import Office from '../images/office.jpg';
import '../pages/home.css';

class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="link-section">
            <Layout enabled = {'home'}>
            <div className = "overlay">
                
                <div className="display-2 text-center title">
                        My company
                    </div>
                <div className="Links">
                    <Link className="Link1 text-decoration-none text-center text-secondary h4" to="/adauga-angajat">
                        <div className="layer"></div>
                      <img src={Add} alt="" className="img"/>
                      {/* <div className="section-name">Recruit</div> */}
                      </Link>
                    <Link className="Link1 text-decoration-none text-center text-secondary h4" to="/lista-angajati">
                    <div className="layer"></div>
                        <img src={List} alt="" className="img"/> 
                        {/* <div className="section-name">Employees list</div> */}
                        </Link>
                </div>
                </div>
            </Layout>
                </div>
        );
    }
}

export default Home;