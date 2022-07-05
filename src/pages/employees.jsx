import React from "react";
import Layout from "../components/layout";
import Employee_list from "../components/employee_list";
import { connect } from "react-redux";

class employees extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
    }

    componentDidMount(){
        const{elems} = this.props;
        this.setState({
            items: elems,
        });
    }

    render(){
        return(
            <Employee_list items = {this.state.items}/>
        );
    }
}


function mapStateToProps(state){
    return{
        elems:state.employees.employees,
    }
}

export default connect(mapStateToProps, null)(employees);