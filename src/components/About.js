import React, { Component } from "react"
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";

class About extends Component {
    
    constructor(props){
        super(props);
        console.log("Parent - constructor");
    }
    
    componentDidMount() {
        console.log("Parent - Component Did mount");
    }
    render(){
        console.log("Parent - render");
        return(
            <>
                <Outlet />
                <Profile name=" one" />
                <Profile name=" two"/>
            </>
        )
    }
}
export default About;