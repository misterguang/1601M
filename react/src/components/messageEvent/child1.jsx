import React, { Component } from 'react'
import PropTypes from "prop-types"

import bus from "../../tool/bus"

class Child extends Component {
   
    constructor(props){
        super(props)
        this.state={
            msg:"beijing"
        }
       bus.$emit("getmsg","msg",this.state.msg)
    }
    changeState(){
        this.setState({
            msg:"nanjing"
        },()=>{
            bus.$emit("getmsg","msg",this.state.msg)
        })
        
    }
   
   changeChild(){
       bus.$emit("changeChild")
   }

    render() {
        return (
            <div>
                <h2>child1子组件</h2>
                <button onClick={this.changeState.bind(this)}>点击改变msg</button>
                <button onClick={this.changeChild.bind(this)}>显示child2</button>
            </div>
        )   
    }
}




export default Child