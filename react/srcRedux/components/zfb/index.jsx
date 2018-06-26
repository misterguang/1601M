import React, { Component } from 'react'
import {
    Route
} from 'react-router-dom'
import {
    connect
} from "react-redux"

import Child from "./child"

 class componentName extends Component {
     constructor(props){
        super(props)
     }

    render() {
        let el=this.props.carList.map((i)=>{
            return <li key={i.id}>{i.name}</li>
        })

        return (
            <div>
                <h2>支付宝</h2>
               <Child {...this.props}/>
                <ul>
                    {el}
                </ul>
            </div>
        )
    }
}
export default ()=><Route path="/Zfb" component={connect((state)=>state.zfb)(componentName)} />