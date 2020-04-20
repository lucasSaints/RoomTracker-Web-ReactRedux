import React from "react";
import { withRouter } from "react-router-dom";

export default props => (
    <div style={{minWidth: "100px", float: "right", color: "#FBF9F0", textAlign: "center", margin: "1% 3% 1% 0"}}>
        <strong className="link">{props.username}</strong>
        <hr/>
        <div className="link">{props.empresa}</div>
    </div>
)
/*
class Logdiv extends React.Component{
    constructor(props){
        super(props);
        this.redirecc = (path) => {
            this.props.history.push(path);
        }
    }
    
    render(){
        <div style={{minWidth: "100px", float: "right", color: "#FBF9F0", textAlign: "center", margin: "1% 3% 1% 0"}}>
            <strong onClick={this.redirecc("/login")} className="link">{props.username}</strong>
            <hr/>
            <div className="link">{props.empresa}</div>
        </div>
    }
}

export default withRouter(Logdiv);*/
