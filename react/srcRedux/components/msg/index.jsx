import React, { Component } from 'react'
import Store from "../../store/index"
import {
    Route,
    Link
} from "react-router-dom"
 class Msg extends Component {
    constructor(props){
        super(props)
        this.state={
            num:Store.getState().num
        }
        Store.subscribe(()=>{
            this.setState({
                num:Store.getState().num
            })
        })
    }

    render() {
        return (
            <div>
                <h3>msg父组件</h3>
                <div>父组件显示redux数据：{this.state.num}</div>
                <ul>
                    <li><Link to="/Msg/Child1">child1</Link></li>
                    <li><Link to="/Msg/Child2">child2</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

import Child1 from "./child1"
import Child2 from "./child2"

export default ()=><Route path="/Msg" render={()=>{
    return <Msg>
            <Child1 />
            <Child2 />
    </Msg>
}}/>