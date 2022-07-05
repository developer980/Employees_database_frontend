import React from "react";
import "./item.css";
import X from "../icons/x.svg";
import Axios from "axios";

function employee_item(props){
    const{firstName, lastName, position, salary, employmentDate, id} = props;

    // document.getElementById('fire').addEventListener('click', (e) => {
    //     console.log("pressed")
    // });
    console.log(id);
    return(
        <div className="item">
            <div className="element">
                <p>
                    {firstName}
                </p>
            </div>
            <div className="element">
                <p>
                    {lastName}
                </p>
            </div>
            <div className="element">
                <p>
                    {position}
                </p>
            </div>

            <div className="element">
                <p>
                    {salary}
                </p>
            </div>

            <div className="element">
                <p>
                    {employmentDate}
                </p>
            </div>

            <div className = "element">
                <button className = "fire-button" onClick = {() => {
                    console.log(id);
                    Axios.delete(`https://employees-database-test.herokuapp.com/delete/${id}`)
                    .then(()=>{
                        window.location.reload();
                    })
                }}>
                {props.children}
                </button>
            </div>
        </div>
    );
}

export default employee_item;