import React, { Component } from 'react'
import Child1 from "./child1"
import Child2 from "./child2"
import HocBus from "../hoc/hocBus"

class Parent extends Component {

    constructor(props){
        super(props)
        this.state={
            state:true
        }
        
    }
    componentWillReceiveProps(props){
        // console.log(props)
    }
    render() {
        return (
            <div>
                <h1>父组件</h1>
                <Child1 {...this.props}/>
                <Child2  {...this.props}/>
            </div>
        )
    }

    componentWillUnmount(){
     
    }
}


export default HocBus(Parent)