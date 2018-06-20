import React, { Component } from 'react'
import Store from "../../store/index"

import {
    Route
} from "react-router-dom"
 class Child2 extends Component {
    constructor(props){
        super(props)
        console.log(Store.getState())
        this.state={
            num:Store.getState().num
        }
    }
    render() {
        return (
            <div>
                <h3>Child2子组件</h3>
                <div>
                    数据为：{this.state.num}
                </div>
            </div>
        )
    }
}

export default ()=><Route path="/Msg/Child2" component={Child2}/>