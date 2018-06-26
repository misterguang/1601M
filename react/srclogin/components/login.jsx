import React, { Component } from 'react'
import {
    connect
} from "react-redux"
import {
    actions,
    LOGIN
} from "../store/index"

 class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
        }
    }
    loginHandle(){

        this.props.dispatch(actions[LOGIN](this.state,this))
        // this.props.history.push("/index")
    }
    changeHandle(type,e){
       this.setState({
           [type]:e.target.value
       })
    }
    goto(){
        this.props.history.push("/register")
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <label htmlFor="">用户名：</label>
                        <input type="text" value={this.state.username} onChange={(e)=>{
                            this.changeHandle("username",e)
                        }}/>
                    </li>
                    <li>
                        <label htmlFor="">密码：</label>
                        <input type="text" value={this.state.password} onChange={(e)=>{
                            this.changeHandle("password",e)
                        }}/>
                    </li>
                    <li>
                       <button onClick={this.loginHandle.bind(this)}>登陆</button>
                       <button onClick={this.goto.bind(this)}>注册</button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect((state)=>state)(Login)