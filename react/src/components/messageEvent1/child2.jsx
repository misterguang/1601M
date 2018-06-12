import React, { Component } from 'react'
import PropTypes from "prop-types"

import bus from "../../tool/bus"

class Child extends Component {
   
    constructor(props){
        super(props)
        console.log(bus.data.msg)
        this.state={
            msg:bus.data.msg
        }
        // bus.$on("getmsg",(data)=>{
            
        //     this.setState({
        //         msg:data
        //     })
        // })
    }
    
   
    changeChild(){
        bus.$emit("changeChild")
    }

    render() {
        return (
            <div>
                <h2>child2子组件</h2>
                <p>{this.state.msg}</p>
                <button onClick={this.changeChild.bind(this)}>显示child1</button>
            </div>
        )   
    }
}




export default Child