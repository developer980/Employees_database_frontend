import React from "react";
import '../components/sideBar.css';
import { filter_employees } from "../redux/filter/filter";
import { connect } from "react-redux";

class SideBar extends React.Component{
    constructor(props){
        super(props);
    }
    //const{min_salary, max_salary} = props;
    render(){
        const{min_salary, max_salary, filter_by_price} = this.props;
        return(
            <div className="sideBar">
                <div className="option h6">
                    <div>
                        <input className = "option-input mr-2" type="radio" name ="option" value="4000"
                            onClick={()=>{filter(this.props, min_salary, max_salary, 0, 2500, filter_by_price, 'price')}}/>
                            Junior: 0-2500 lei
                        </div> 
                    </div>
                
                <div className="option h6"><div>
                    <input className = "option-input mr-2" type="radio" name ="option" value="7000"
                        onClick={()=>{filter(this.props, min_salary, max_salary, 2500, 4000, filter_by_price, 'price')}}/>
                        Middle: 2500-4000 lei
                    </div> 
                </div>
                
                <div className="option h6"> <div>
                    <input className = "option-input mr-2" type="radio" name ="option" value="9000"
                        onClick={()=>{filter(this.props, min_salary, max_salary, 4000, 10000, filter_by_price, 'price')}}/>
                        Senior: 4000+ lei</div> 
                </div>
                
                <div className="option h6"><div>
                    <input className = "option-input mr-2" type="radio" name ="option" value="0"
                        onClick={()=>{filter(this.props, min_salary, max_salary, 0, 0, filter_by_price, 0)}}/>
                        Clear filters
                </div>
                
                </div>
                
                <div className="option h6"><div>
                    <input className = "option-input mr-2" type="radio" name ="option" value="0"
                        onClick={()=>{filter(this.props, min_salary, max_salary, 0, 0, filter_by_price, 'name')}}/>
                        Sort by name</div>
                </div>
            </div>
        );
    }
}

function filter(props, min_salary, max_salary, min, max, filter_by_price, status){
    min_salary = min;
    max_salary = max;
    filter_by_price = status;
    console.log(min_salary, max_salary);
    props.filter_employees({
        min_salary, 
        max_salary,
        status
    })
}

function mapDispatchToProps(dispatch){
    return{
        filter_employees: (payload) => dispatch(filter_employees(payload)),
    }
}

export default connect(null, mapDispatchToProps)(SideBar);