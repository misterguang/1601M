import React, { Component } from 'react'
import {actionsTm,T_CHANGESHOPSYNCCARCLASS} from "../../store/index"

export default class Child extends Component {

    constructor(props){
        super(props)
        this.state={
            data:null
        }
      
    }

    handle(){
        this.props.dispatch(actionsTm[T_CHANGESHOPSYNCCARCLASS]())
    }
    render() {
        return (
            <div>
                 <button onClick={this.handle.bind(this)}>请求数据</button>
            </div>
        )
    }
}
