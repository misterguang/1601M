import React, { Component } from 'react'
import {
    Route
} from 'react-router-dom'
import {
    connect
} from "react-redux"

import Child from "./child"
import Child2 from "./child2"
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
               <Child {...this.props}/>
               <Child2 {...this.props}/>
                <ul>
                    {el}
                </ul>
            </div>
        )
    }
}
export default ()=><Route path="/syncRedux" component={connect((state)=>state)(componentName)} />