import React, { Component } from 'react'
import Store from "../../store/index"
import {connect} from "react-redux"
import {
    Route,
    Link
} from "react-router-dom"

import Show from "./com/show"

 class Msg extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            num:this.props.num
        }
    }
    componentWillReceiveProps(props){
            this.setState({
                num:props.num
            })
    }
    render() {
        console.log(this.props.children)
        let Childcom=()=>{
            
        }

        return (
            <div>
                <h3>msg父组件</h3>
                <Show {...this.props}/>
                <div>父组件显示redux数据：{this.state.num}</div>
                <ul>
                    <li><Link to="/MsgReactRedux/Child1">child1</Link></li>
                    <li><Link to="/MsgReactRedux/Child2">child2</Link></li>
                </ul>
                {/* {this.props.children} */}
                <Childcom {...this.props} />
            </div>
        )
    }
}

import Child1 from "./child1"
import Child2 from "./child2"

let MsgR=connect((state)=>{
    console.log(state)
    return state
})(Msg)

export default ()=><Route path="/MsgReactRedux" render={()=>{
    return <MsgR>
            <Child1 />
            <Child2 />
    </MsgR>
}}/>