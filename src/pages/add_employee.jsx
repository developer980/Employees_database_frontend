import React from "react";
import "../pages/add_employee.css";
import {connect} from 'react-redux';
import { addEmployee } from "../redux/list/list";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import Axios from 'axios'

class add_employee extends React.Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            position:'',
            employmentDate:'',
            shift:'',
            salary:''
        }
    }

    render(){

        console.log(this.state)
        const{name, salary, employmentDate} = this.state;
        return(
                
            <Layout enabled = {'list'}>
                <div>
                <form className="nice-form" onSubmit={() => {
                    Axios.post('https://employees-database-test.herokuapp.com/update_employees', {
                        firstName:this.state.firstName,
                        lastName:this.state.lastName,
                        position:this.state.position,
                        shift:this.state.shift,
                        employee_salary:this.state.salary,
                        employment_date:this.state.employmentDate
                    })
                }}>
                    <label htmlFor="First name">First name</label>
                        <input className="home-input" type="text" placeholder="First name" onChange={(event)=>this.employee_firstName(event)}/>
                    
                    <label htmlFor="Last name">Last name</label>
                        <input className="home-input" type="text" placeholder="Last name" onChange={(event)=>this.employee_lastName(event)}/>
                        
                    <label htmlFor="Position">Position</label>
                        <input className="home-input" type="text" placeholder="Position" onChange={(event)=>this.position(event)}/>

                    <label htmlFor="Shift">Shift</label>
                        <input className="home-input" type="text" placeholder="Shift" onChange={(event)=>this.shift(event)}/>
                    
                    <label htmlFor="Salariu">Salary</label>
                        <input className="home-input" type="number" onChange={(event)=>this.employee_salary(event)}/>
                    
                    <label htmlFor="Data angajarii">Employment date</label>
                        <input className="home-input" type="date" onChange={(event)=>this.employment_date(event)}/>
                <button className="add-user" type = "submit">Adauga angajat</button>
                </form>
                </div>
                </Layout>
        );    
    }   

    employee_firstName(event){
        this.setState({firstName:event.target.value});
        event.preventDefault();
     //   this.state = this.props;
    }

    employee_lastName(event){
        this.setState({lastName:event.target.value});
        event.preventDefault();
     //   this.state = this.props;
    }

    position(event){
        this.setState({position:event.target.value});
        event.preventDefault();
     //   this.state = this.props;
    }

    shift(event){
        this.setState({shift:event.target.value});
        event.preventDefault();
     //   this.state = this.props;
    }

    employee_salary(event){
        this.setState({salary:event.target.value});
        event.preventDefault();
      //  this.state = this.props;
    }
    
    employment_date(event){
        this.setState({employmentDate:event.target.value});
    }

    execute(event){
        console.log(this.state)
        event.preventDefault();
    }
}

function mapDispatchToProps(dispatch){
    return{
        addEmployee: (payload) => dispatch(addEmployee(payload))
    }
}
export default connect(null, mapDispatchToProps)(add_employee);