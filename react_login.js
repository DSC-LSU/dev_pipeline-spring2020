'use strict';
import React, {Component} from 'react';
import './Login_Page_styles.css';
const e =React.createElement;

class react_login extends Component{
    render(){

        state = {
            username:""
        }

        handleUsername = e=>{
            this.setState({
                username : e.target.value
            });
        }
        return (
            <div class="username">
            <label id="username_label" for="username_box">Username:<a></a></label>
            <input 
                id="username_box" type="text" placeholder="DSC Username" required 
                value = {this.state.username}
                onChange = {this.handleUsername}
            ></input><br></br>
            <div><b>{this.state.username}</b></div>
            </div> 
        );
    }
}

const domContainer = 
document.querySelector('#login_react');
ReactDOM.render(e(react_login),domeContainer);