import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                count: 0,
            }
            console.log("child - constructor" + this.props.name)
    }
    componentDidMount() {
        console.log("child - component did mount" + this.props.name)
    }
    render(){
        console.log("child - render" + this.props.name)
        const {count} = this.state;
        return(
            <>
                <h1>Profile Class Component</h1>
                <h2>{this.props.name}</h2>
                <h2>count: {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: 1,
                    });
                }}>click</button>
            </>
        )
    }
}

export default Profile;