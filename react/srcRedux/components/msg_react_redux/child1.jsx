import React, { Component } from 'react'
import {
    Route
} from "react-router-dom"
import Store, {actions} from "../../store"
import {connect} from "react-redux"
class Child1 extends Component {
     constructor(props){
        super(props)
        console.log(props)
        this.state={
            num:1
        }
        this.props.dispatch(actions.addNum(this.state.num))
     }
     addHandle(){
         this.setState({
             num:this.state.num+1
         },()=>{
            this.props.dispatch(actions.addNum(this.state.num))
         })
     }
    render() {
        return (
            <div>
                <h3>Child1子组件</h3>
                <button onClick={this.addHandle.bind(this)}>递增num值</button>
            </div>
        )
    }
}

// let Child1R=connect((state)=>{
//     console.log(state)
//     return state
// })(Child1)

export default ()=><Route path="/MsgReactRedux/Child1" component={Child1}/>