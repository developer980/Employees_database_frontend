import React from "react";
import { connect } from "react-redux";
import Employee_item from "./employee_item";
import Layout from './layout';
import Sidebar from "./Sidebar";
import { filter_employees } from "../redux/filter/filter";
import '../components/employeeList.css';
import Axios from "axios";
import X from "../icons/x.svg";

class employee_list extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employees:[]
        }

        Axios.get("https://employees-database-test.herokuapp.com/get_employeeInfo").then((response)=> {
            this.setState({employees:response.data})
        })
    }
    render(){
        const{items, min, max, status} = this.props;
        const employees = this.state.employees.reverse();
        
    console.log(this.state)
        return(
            <Layout enabled = {'add'}>
            <div>
               <Sidebar></Sidebar>
                <div className="list">
                    <b><Employee_item firstName = "First name"
                    lastName = "Last name"
                    position = "Position"
                    shift = "shift"
                    salary = "Salary" employmentDate = "Employment Date"/></b>
                    {
                        status ?(
                            status == "price" ? employees.filter(item=> item.employee_salary >= min && item.employee_salary < max).map(
                                item=>{
                                    return (
                                        <div>
                                        <div className="content">
                                        <Employee_item
                                                firstName ={item.employee_firstName}
                                                lastName = {item.employee_lastName}
                                                position = {item.position}
                                                shift = {item.shift}
                                                salary = {item.employee_salary}
                                                employmentDate = {item.employment_date}
                                                id = {item.id}>
                                                <img src={X} alt="" />
                                                </Employee_item>
                                        </div>
                                        </div>
                                    );
                                }
                            )
                            :
                        ( employees.sort((a, b) =>{
                            if(a.name < b.name){
                                return -1
                            }
                            if(a.name > b.name){
                                return 1;
                            }
                            return 0;
                        }).map( item=>{
                                    return (
                                        <div className="content">
                                            <Employee_item
                                                firstName ={item.employee_firstName}
                                                lastName = {item.employee_lastName}
                                                position = {item.position}
                                                shift = {item.shift}
                                                salary = {item.employee_salary}
                                                employmentDate = {item.employment_date}
                                                id = {item.id}>
                                                <img src={X} alt="" />
                                            </Employee_item>
                                        </div>
                                    );
                                }
                            )
                        )
                        )
                        :(
                            employees.map(
                                item=>{
                                    return (
                                        <div>
                                        <div className="content">
                                            <Employee_item
                                                firstName ={item.employee_firstName}
                                                lastName = {item.employee_lastName}
                                                position = {item.position}
                                                shift = {item.shift}
                                                salary = {item.employee_salary}
                                                employmentDate = {item.employment_date}
                                                id = {item.id}>
                                                <img src={X} alt="" />
                                            </Employee_item>
                                        </div>
                                        </div>
                                    );
                                }
                            )
                        )
                    }
                </div>
            </div>
            </Layout>
        );
    }            
    click(filter){
        console.log(filter)
    }
}

function mapStateToProps(state){
    return{
        min:state.filter.min_salary,
        max:state.filter.max_salary,
        status:state.filter.status,
    }
}

export default connect(mapStateToProps, null)(employee_list);