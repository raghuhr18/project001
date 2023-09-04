import React, { Component } from "react"
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";

class About extends Component {
    
    constructor(props){
        super(props);

    }
    

    render(){

        return(
            <>
                <Outlet />
                <Profile name=" one" />

            </>
        )
    }
}
export default About;