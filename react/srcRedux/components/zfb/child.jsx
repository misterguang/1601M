import React, { Component } from 'react'
import {actionsZfb,Z_CHANGESHOPSYNCCARCLASS} from "../../store/index"

export default class Child extends Component {

    constructor(props){
        super(props)
        this.state={
            data:null
        }
      
    }

    handle(){
        this.props.dispatch(actionsZfb[Z_CHANGESHOPSYNCCARCLASS]())
    }
    render() {
        return (
            <div>
                 <button onClick={this.handle.bind(this)}>请求数据</button>
            </div>
        )
    }
}
