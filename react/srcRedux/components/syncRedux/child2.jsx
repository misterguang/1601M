import React, { Component } from 'react'
import {actions,CHANGESHOPSYNCCARCLASS} from "../../store/index"

export default class Child extends Component {

    constructor(props){
        super(props)
        this.state={
            data:null
        }
      
    }
    handle(){
        this.props.dispatch(actions[CHANGESHOPSYNCCARCLASS]())
    }
    render() {
        return (
            <div>
                 <button onClick={this.handle.bind(this)}>请求数据2</button>
            </div>
        )
    }
}
