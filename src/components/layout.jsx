import React from "react";
import Header from "./header";
import '../components/layout.css'

function layout(props){
    const{enabled} = props;
    console.log(enabled);
    return(
        <div>
            <Header enabled = {enabled}></Header>
            <div className = "layout">
                {props.children}
                </div>
        </div>
    );
}

export default layout;