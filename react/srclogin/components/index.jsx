import React, { Component } from 'react'
import {
    Route,
    Link
} from "react-router-dom"
import {
    connect
} from "react-redux"

import Pupop from "./pupop"

 class Index extends Component {
    constructor(props){
        super(props)
        console.log(props.userId)
        // if(!props.userId){
        //     this.props.history.push("/login")
        // }
        
        this.state={

            redPack:{
                state:sessionStorage.getItem("redPack")?false:true,
                msg:"领取红包",
                cbOk:()=>{
                    console.log(this.state)
                    this.setState({
                        redPack:{...this.state.redPack,...{state:false}},
                        sign:sessionStorage.getItem("sign")?this.state.sign:{...this.state.sign,...{state:true}}
                    },()=>{
                        sessionStorage.setItem("redPack",true)
                        sessionStorage.setItem("sign",true)
                    })

                },
                cbErr:()=>{
                    this.setState({
                        redPack:{...this.state.redPack,...{state:false}},
                        sign:sessionStorage.getItem("sign")?this.state.sign:{...this.state.sign,...{state:true}}
                    },()=>{
                        sessionStorage.setItem("sign",true)
                    })
                }
            },
            sign:{
                state:false,
                msg:"签到",
                cbOk:()=>{
                    this.setState({
                        sign:{...this.state.sign,...{state:false}}
                    })
                },
                cbErr:()=>{
                    this.setState({
                        sign:{...this.state.sign,...{state:false}}
                    })
                }
            }
        }
    }
    render() {
        let el=this.state.redPack.state?<Pupop {...this.state.redPack}/>:null
        let elsign=this.state.sign.state?<Pupop {...this.state.sign}/>:null
        return (
            <div>
                <h2>首页</h2>
                <ul>
                    <li>
                        <Link to="/Msg">通讯</Link>
                    </li>
                </ul>
                {el}
                {elsign}
            </div>
        )
    }
}
export default connect((state)=>state)(Index)