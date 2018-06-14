import React, { Component } from 'react'
import PropTypes from "prop-types"

import HocBus from "../hoc/hocBus"

class Child extends Component {
   
    constructor(props){
        super(props)
       
        this.state={
            msg:props.msg
        }
    }
    componentWillReceiveProps(props){
   
        this.setState({
            msg:props.msg
        })
    }
    
    render() {
     
        return (
            <div>
                <h2>child2子组件</h2>
                <p>{this.state.msg}</p>
              
            </div>
        )   
    }
}




export default Child