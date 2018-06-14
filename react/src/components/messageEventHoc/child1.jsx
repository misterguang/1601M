import React, { Component } from 'react'
import PropTypes from "prop-types"

import HocBus from "../hoc/hocBus"

class Child extends Component {
   
    constructor(props){
        super(props)
        this.state={
            msg:"beijing"
        }
        
        props.$emit("getmsg","msg",this.state.msg)
    }

    changeMsg(){
        this.setState({
            msg:"nanjing"
        },()=>{
            this.props.$emit("getmsg","msg",this.state.msg)
        })
    }
    render() {
        return (
            <div>
                <h2>child1子组件</h2>
                <button onClick={this.changeMsg.bind(this)}>点击改变msg</button>
            </div>
        )   
    }
}




export default Child