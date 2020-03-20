'use strict';
import React, {Component} from 'react';
import './Login_Page_styles.css';
const e =React.createElement;

class react_login extends Component{
    state = {
        username:""
    }

    handleUsername = e=>{
        this.setState({
            username : e.target.value
        });
    }

    render(){

        
        // return (
        //     <div class="username">
        //     <label id="username_label" for="username_box">Username:<a></a></label>
        //     <input 
        //         id="username_box" type="text" placeholder="DSC Username" required 
        //         value = {this.state.username}
        //         onChange = {this.handleUsername}
        //     ></input><br></br>
        //     <div><b>{this.state.username}</b></div>
        //     </div> 
        // );
        return e(
            {onChange : e=>this.setState({username:e.target.value})}
        ) 

    }
}

const domContainer = 
document.querySelector('#username_box');
ReactDOM.render(e(react_login),domeContainer);