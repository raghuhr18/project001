import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                username: "",
                
            }
            console.log("child - constructor" + this.props.name)
    }
    async componentDidMount() {
        console.log("child - component did mount" + this.props.name)
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })

    }
    render(){
        console.log("child - render" + this.props.name)
        return(
            <>
                <h1>Profile Class Component</h1>
                <h2>name : {this.state.userInfo?.name}</h2>
                <h2>location : {this.state.userInfo?.location}</h2>
                <img src={this.state.userInfo?.avatar_url} />
            </>
        )
    }
}

export default Profile;