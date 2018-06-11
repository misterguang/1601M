import React, { Component } from 'react'
import Dialog from "./Dialog"


export default class Popuproot extends Component {
    constructor(props){
        super(props)
        this.state={
            alert:{
                type:"alert",
                show:false,
                sureCalback:(state)=>{
                    console.log("alert"+state)
                },
                handle:()=>{
                    this.setState({
                        alert:{...this.state.alert,...{show:!this.state.alert.show}}
                    })
                }
            },
            confirm:{
                type:"confirm",
                show:false,
                sureCalback:(state)=>{
                    console.log("confirm"+state)
                },
                noCalback:(state)=>{
                    console.log("confirm"+state)
                },
                handle:()=>{
                    this.setState({
                        confirm:{...this.state.confirm,...{show:!this.state.confirm.show}}
                    })
                }
            },
            prompt:{
                type:"prompt",
                show:false,
                sureCalback:(state)=>{
                    console.log(state)
                },
                noCalback:(state)=>{
                    console.log("prompt"+state)
                },
                handle:()=>{
                    this.setState({
                        prompt:{...this.state.prompt,...{show:!this.state.prompt.show}}
                    })
                }
            }
        }
    }
   

    render() {
        return (
            <div>
                <ul>
                    <li onClick={this.state.alert.handle.bind(this)}>点击alert</li>
                    <li  onClick={this.state.confirm.handle.bind(this)}>点击comfirm</li>
                    <li  onClick={this.state.prompt.handle.bind(this)}>点击prompt</li>
                </ul>
                <main>
                    <Dialog config={this.state.alert}/>
                    <Dialog config={this.state.confirm}/>
                    <Dialog config={this.state.prompt}/>
                </main>

            </div>
        )
    }
}
