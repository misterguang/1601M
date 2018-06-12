import React, { Component } from 'react'
import Child1 from "./child1"
import Child2 from "./child2"
import bus from "../../tool/bus"

export default class Parent extends Component {

    constructor(props){
        super(props)
        this.state={
            state:true
        }
        this.eventListen()
    }
    eventListen(){
        bus.$on("changeChild",()=>{
            this.setState({
                state:!this.state.state
            })
        })
    }
    render() {
        return (
            <div>
                <h1>父组件</h1>
              
                {this.state.state? <Child1 />:<Child2 />}
               
                
            </div>
        )
    }

    componentWillUnmount(){
        bus.destroyed("up")
    }
}
