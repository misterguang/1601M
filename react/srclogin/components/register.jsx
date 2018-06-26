import React, { Component } from 'react'
import {
    connect
} from "react-redux"

import axios from "axios"

 class Register extends Component {
     constructor(props){
         super(props)
         this.state={
            username:"",
             password:""
         }
     }
     register(){
        axios.post("/api/register",this.state).then((data)=>{
            console.log(data.data)
            if(data.data.code=="1003"){
                this.props.history.push("/login")
            }else{
                alert(data.data.msg)
            }
        })
     }
     changeHandle(type,e){
         this.setState({
             [type]:e.target.value
         })
     }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <label htmlFor="">用户名：</label>
                        <input type="text" value={this.state.username} onChange={(e)=>this.changeHandle("username",e)}/>
                    </li>
                    <li>
                        <label htmlFor="">密码：</label>
                        <input type="text" value={this.state.password} onChange={(e)=>this.changeHandle("password",e)}/>
                    </li>
                    <li>
                       <button onClick={this.register.bind(this)}>注册</button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default connect((state)=>state)(Register)